FROM node:22-bookworm-slim AS build

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates python3 make g++ pkg-config libvips \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

ENV npm_config_fetch_timeout=120000 \
    npm_config_fetch_retries=5 \
    npm_config_fetch_retry_maxtimeout=600000

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/public /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]