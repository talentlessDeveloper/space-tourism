export const throttle = (cb, delay = 500) => {
  let lastTime = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastTime < delay) return;
    cb(...args);
    lastTime = now;
  };
};
