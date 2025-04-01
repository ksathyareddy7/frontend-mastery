Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myIncludes called on null or undefined"
    );
  }

  const len = this.length;

  // If the array length is 0, return false
  if (len === 0 || fromIndex >= len) return false;

  // Handle negative indices
  let start = fromIndex;
  if (start < 0) {
    start = Math.max(len + start, 0); // Convert negative indices
  }

  // Iterate through the array starting from the adjusted index
  for (let i = start; i < len; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }

  return false;
};

const array1 = [1, 2, 3];

console.log(array1.myIncludes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.myIncludes("cat"));
// Expected output: true

console.log(pets.myIncludes("at"));
// Expected output: false
