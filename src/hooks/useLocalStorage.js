import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorage(key, initialValue)
  );

  const setValue = (value) => {
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    setLocalStorageValue(value);

    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorage(key, initialValue) {
  const localItems = localStorage.getItem(key);

  return localItems ? JSON.parse(localItems) : initialValue;
}

export default useLocalStorage;
