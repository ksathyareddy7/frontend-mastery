Array.prototype.myFlatMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myFlatMap called on null or undefined"
    );
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];
  const len = this.length;

  for (let i = 0; i < len; i++) {
    const callbackValue = callback.call(thisArg, this[i], i, this);
    if (Array.isArray(callbackValue)) {
      result.push(...callbackValue);
    } else {
      result.push(callbackValue);
    }
  }

  return result;
};

const arr1 = [1, 2, 1];

const result1 = arr1.myFlatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result1); // Expected output: Array [1, 2, 2, 1]

const result2 = arr1.myFlatMap((num) => (num === 2 ? [3, [4, 5]] : 1));

console.log(result2); // Expected output: Array [1, 3, [4, 5], 1]
