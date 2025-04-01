Array.prototype.myEvery = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myEvery called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const array = Object(this);
  const len = array.length;

  for (let i = 0; i < len; i++) {
    if (!callback.call(thisArg, array[i], i, this)) {
      return false;
    }
  }
  return true;
};

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.myEvery(isBelowThreshold)); // true
