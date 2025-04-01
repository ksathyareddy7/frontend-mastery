function mySetInterval(callback, delay) {
  let id = null;
  function repeat() {
    callback(); // invoke callback function
    id = setTimeout(repeat, delay);
  }
  id = setTimeout(repeat, delay); // start the loop
  return () => id; // return helper function because id is updated every time repeat is invoked
}

// function to clear interval
function clearMySetInterval(id) {
  clearTimeout(id);
}

let getId = mySetInterval(
  () => console.log("logging message every 1 second"),
  1000
);

setTimeout(() => {
  clearMySetInterval(getId());
}, 4500);
