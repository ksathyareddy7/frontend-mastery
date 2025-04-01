Array.prototype.myKeys = function () {
  if (this == null) {
    throw new TypeError("Array.prototype.myKeys called on null or undefined");
  }
  let index = 0;
  const len = this.length;

  // Return an iterator-like object
  return {
    next: function () {
      if (index < len) {
        return { value: index++, done: false };
      }
      return { value: undefined, done: true };
    },
  };
};

const arr = ["a", "b", "c"];
const iterator = arr.myKeys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
