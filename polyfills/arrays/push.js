Array.prototype.myPush = function (...elements) {
  if (this == null) {
    throw new TypeError("Array.prototype.myPush called on null or undefined");
  }

  const originalLength = this.length;

  this.length = originalLength + elements.length;
  for (let i = originalLength, j = 0; i < this.length; i++, j++) {
    this[i] = elements[j];
  }
  return this.length;
};

const animals = ["pigs", "goats", "sheep"];

const count = animals.myPush("cows");
console.log(count); // Expected output: 4
console.log(animals); // Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.myPush("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
