Array.prototype.myToString = function () {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myToSorted called on null or undefined"
    );
  }
  return this.join();
};

const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
