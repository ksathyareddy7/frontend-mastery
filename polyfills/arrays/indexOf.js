Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myIndexOf called on null or undefined"
    );
  }

  const len = this.length;

  // If the array length is 0 or fromIndex is beyond array length, return -1
  if (len === 0 || fromIndex >= len) return -1;

  // Handle negative indices
  let start = fromIndex;
  if (start < 0) {
    start = Math.max(len + start, 0); // Convert negative indices
  }

  // Iterate through the array starting from the adjusted index
  for (let i = start; i < len; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

const array1 = [1, 7, 5, 6, 2, 3];

console.log(array1.myIndexOf(2));
// Expected output: 4

const pets = ["cat", "dog", "bat"];

console.log(pets.myIndexOf("cat"));
// Expected output: 0

console.log(pets.myIndexOf("at"));
// Expected output: -1
