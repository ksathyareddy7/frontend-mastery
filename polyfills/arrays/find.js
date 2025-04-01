Array.prototype.myFind = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFind called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const len = this.length;

  for (let i = 0; i < len; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

const array1 = [5, 12, 8, 130, 44];

const result = array1.myFind((element) => element > 10);

console.log(result); // 12
