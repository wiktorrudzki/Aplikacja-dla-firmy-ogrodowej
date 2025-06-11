FROM node:22-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/public /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]