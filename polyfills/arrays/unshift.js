Array.prototype.myUnshift = function (...items) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myUnshift called on null or undefined"
    );
  }
  // Keep track of the original length
  const originalLength = this.length;

  // Shift all existing elements to the right to make room for the new items
  for (let i = originalLength - 1; i >= 0; i--) {
    this[i + items.length] = this[i];
  }

  // Add the new items at the beginning of the array
  for (let i = 0; i < items.length; i++) {
    this[i] = items[i];
  }

  // Return the new length of the array
  return this.length;
};

const array1 = [1, 2, 3];

console.log(array1.myUnshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
