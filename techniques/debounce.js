// a debounce function calls in the passed in function after the delay specified

function debounce(fn, delay) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      // preserves context of the function
      return fn.apply(this, args);
    }, delay);
  };
}

function logName(name) {
  console.log(`my name is ${name}`);
}

const debouncedLogName = debounce(logName, 100);

debouncedLogName("User 1");
debouncedLogName("User 2");
debouncedLogName("Sathya Reddy");
// output => "Sathya Reddy" as we trigged the function 3 times continuously the first 2 are ignored
