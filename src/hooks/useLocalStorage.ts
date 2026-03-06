import { useState } from "react";

export const useLocalStorage = (
  key: string,
  initialValue: any,
  ttl?: number
) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      if (!item) {
        return initialValue;
      }

      const parsedItem = JSON.parse(item);

      if (parsedItem.expiry && new Date().getTime() > parsedItem.expiry) {
        window.localStorage.removeItem(key);
        return initialValue;
      }

      return parsedItem.value ?? parsedItem;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: any, customTtl?: number) => {
    if (typeof window === "undefined") {
      console.warn("localStorage is not available in the current environment");
      return;
    }

    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      const effectiveTtl = customTtl ?? ttl;

      let itemToStore;

      if (effectiveTtl) {
        const now = new Date().getTime();
        itemToStore = {
          value: valueToStore,
          expiry: now + effectiveTtl,
        };
      } else {
        itemToStore = { value: valueToStore };
      }

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(itemToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue];
};
