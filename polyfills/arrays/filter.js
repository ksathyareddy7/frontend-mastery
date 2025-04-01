Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const result = [];
  const len = this.length;

  for (let i = 0; i < len; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      // Check if the element exists (handles sparse arrays) [1, , 3]
      result.push(this[i]);
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.myFilter(function (number) {
  return number % 2 === 0; // Keep only even numbers
});

console.log(evenNumbers); // Output: [2, 4]
