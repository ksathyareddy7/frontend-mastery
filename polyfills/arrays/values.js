Array.prototype.myValues = function () {
  if (this == null) {
    throw new TypeError("Array.prototype.myValues called on null or undefined");
  }
  let index = 0;
  const array = Object(this);
  const len = array.length;

  // Return an iterator-like object
  return {
    next: function () {
      if (index < len) {
        return { value: array[index++], done: false };
      }
      return { value: undefined, done: true };
    },
  };
};

const arr = ["a", "b", "c"];
const iterator = arr.myValues();

console.log(iterator.next()); // { value: a, done: false }
console.log(iterator.next()); // { value: b, done: false }
console.log(iterator.next()); // { value: c, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
