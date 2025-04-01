Array.prototype.myforEach = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myforEach called on null or undefined"
    );
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const len = this.length;

  for (let i = 0; i < len; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};

const numbers = [1, 2, 3];
numbers.myforEach((elem) => console.log(elem * 2));
