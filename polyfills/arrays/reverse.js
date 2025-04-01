Array.prototype.myReverse = function () {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myReverse called on null or undefined"
    );
  }

  let left = 0,
    right = this.length - 1;
  while (left < right) {
    // swap elements
    const leftElement = this[left],
      rightElement = this[right];
    this[left] = rightElement;
    this[right] = leftElement;
    // update pointers
    left++;
    right--;
  }

  return this;
};

const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]
