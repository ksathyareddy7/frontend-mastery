let stateArray = [];
let currentIndex = 0;

function useState(initialValue) {
  // Initialize state if it's undefined
  if (typeof stateArray[currentIndex] === "undefined") {
    stateArray[currentIndex] = initialValue;
  }

  // Set state function
  const setState = (newValue) => {
    if (typeof newValue === "function") {
      stateArray[currentIndex] = newValue(stateArray[currentIndex - 1]);
    } else {
      stateArray[currentIndex] = newValue;
    }
    currentIndex++;
  };

  // Move to next index for next useState call
  currentIndex++;

  return [stateArray[currentIndex - 1], setState];
}
