Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.lastIndexOf called on null or undefined"
    );
  }
  const len = this.length;
  if (len === 0) return -1;

  let startIndex = fromIndex === undefined ? len - 1 : fromIndex;

  // If 'fromIndex' is negative, adjust to start counting from the end of the array
  if (startIndex < 0) {
    startIndex = Math.max(len + startIndex, 0);
  }

  if (startIndex >= len) return -1;

  // Iterate backwards from the 'startIndex' to 0
  for (let i = startIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i; // Return the index if a match is found
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4, 3, 2, 1];
console.log(arr.lastIndexOf(3)); // Output: 4
console.log(arr.lastIndexOf(3, 3)); // Output: 2 (starts searching from index 3)
console.log(arr.lastIndexOf(5)); // Output: -1 (not found)
console.log(arr.lastIndexOf(2, -3)); // Output: 1 (starts from index 4, looks backward)
console.log(arr.lastIndexOf(2, -10)); // Output: -1 (out of bounds)
