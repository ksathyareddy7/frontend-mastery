Array.prototype.myPop = function () {
  if (this == null) {
    throw new TypeError("Array.prototype.myPop called on null or undefined");
  }
  const len = this.length;
  if (len === 0) return undefined;

  const removedElement = this[len - 1];
  this.length = len - 1;

  return removedElement;
};

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.myPop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.myPop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
