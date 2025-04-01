Array.prototype.mySome = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.mySome called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const len = this.length;

  for (let i = 0; i < len; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const array1 = [5, 12, 8, 130, 44];

const result1 = array1.mySome((element) => element > 10);
console.log(result1); // true

const result2 = array1.mySome((element) => element > 1000);
console.log(result2); // false
