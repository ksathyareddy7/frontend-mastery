Array.prototype.myFindLastIndex = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myFindLastIndex called on null or undefined"
    );
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const len = this.length;

  for (let i = len - 1; i >= 0; i--) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const array1 = [5, 12, 8, 130, 44];

const result = array1.myFindLastIndex((element) => element > 50);

console.log(result); // 3
