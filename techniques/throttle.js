// a throttle function calls in the passed in function at regular intervals
function throttle(func, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      // preserve context of the function
      func.apply(this, args);
    }
  };
}
