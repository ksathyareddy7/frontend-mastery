function setTimeoutWithRAF(callback, delay) {
  const start = Date.now();
  let id = null;
  function checkTime() {
    const currentTime = Date.now();
    if (currentTime - start >= delay) {
      callback(); // Call the function and end the loop
    } else {
      id = requestAnimationFrame(checkTime); // Check the time again on the next frame
    }
  }

  // Start the "checkTime" loop
  id = requestAnimationFrame(checkTime);
  return () => id; // return helper function because id is updated every time checkTime is invoked
}

// function to clear timeout
function clearSetTimeoutWithRAF(id) {
  cancelAnimationFrame(id);
}

function setTimeoutWSI(callback, delay) {
  const intervalId = setInterval(() => {
    callback(); //execute given function
    clearInterval(intervalId); // clear interval after invoking function
  }, delay);
  return intervalId;
}

// function to clear timeout
function clearTimeoutWSI(id) {
  clearInterval(id);
}
