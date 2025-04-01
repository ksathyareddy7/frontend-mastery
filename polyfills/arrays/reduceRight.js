Array.prototype.myReduceRight = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myReduceRight called on null or undefined"
    );
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const len = this.length;
  let accumulator = initialValue ? initialValue : this[len - 1];
  for (let i = initialValue ? len - 1 : len - 2; i >= 0; i--) {
    const result = callback(accumulator, this[i], i, this);
    accumulator = result;
  }
  return accumulator;
};

const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.myReduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(result); // Expected output: Array [4, 5, 2, 3, 0, 1]
