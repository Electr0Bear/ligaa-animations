const DELAY = 100;

export const debounce = (cb, delay = DELAY) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
};
