Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const result = [];
  const len = this.length;

  for (let i = 0; i < len; i++) {
    result[i] = callback.call(thisArg, this[i], i, this);
  }

  return result;
};

const result = [1, 2, 3].myMap((elem) => elem * 2);
console.log(result); // [2, 4, 6]
