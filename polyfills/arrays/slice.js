Array.prototype.mySlice = function (start, end) {
  if (this == null) {
    throw new TypeError("Array.prototype.mySlice called on null or undefined");
  }
  const array = this;
  const len = array.length;

  start = start === undefined ? 0 : start;

  // Handle negative start index
  if (start < 0) {
    start = Math.max(len + start, 0);
  }

  end = end === undefined ? len : end;

  // Handle negative end index
  if (end < 0) {
    end = Math.max(len + end, 0);
  }

  if (start >= end) {
    return [];
  }

  // Create a new array to store the extracted elements
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }

  return result;
};

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.mySlice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.mySlice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.mySlice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.mySlice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.mySlice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.mySlice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
