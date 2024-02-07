export function throttle(func, delay) {
  let isThrottled = false;
  let lastArgs = null;

  function wrapper(...args) {
    if (isThrottled) {
      lastArgs = args;
      return;
    }

    func.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (lastArgs) {
        wrapper.apply(this, lastArgs);
        lastArgs = null;
      }
    }, delay);
  }

  return wrapper;
}