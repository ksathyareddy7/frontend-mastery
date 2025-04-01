Array.prototype.myShift = function () {
  if (this == null) {
    throw new TypeError("Array.prototype.myShift called on null or undefined");
  }
  const len = this.length;
  if (len === 0) return undefined;

  const removedElement = this[0];
  for (let i = 0; i < len - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length = len - 1;

  return removedElement;
};

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.myShift());
// Expected output: "broccoli"

console.log(plants);
// Expected output: Array [ "cauliflower", "cabbage", "kale", "tomato"]

plants.myShift();

console.log(plants);
// Expected output: Array ["cabbage", "kale", "tomato"]
