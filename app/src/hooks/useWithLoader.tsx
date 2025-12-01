import { useState, useCallback } from "react";

function useWithLoader<T extends unknown[], V>(fn: (...args: T) => V) {
  const [isLoading, setIsLoading] = useState(false);

  const wrappedFn = useCallback(
    async (...args: T): Promise<V> => {
      setIsLoading(true);
      try {
        const result = await fn(...args);
        return result;
      } finally {
        setIsLoading(false);
      }
    },
    [fn],
  );

  return [wrappedFn, isLoading] as const;
}

export default useWithLoader;
