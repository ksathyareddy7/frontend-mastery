Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const len = this.length;
  let accumulator = initialValue ? initialValue : this[0];
  for (let i = initialValue ? 0 : 1; i < len; i++) {
    const result = callback(accumulator, this[i]);
    accumulator = result;
  }
  return accumulator;
};

const result = [1, 2, 3, 4].myReduce((acc, value) => acc + value, 0);

console.log(result);
