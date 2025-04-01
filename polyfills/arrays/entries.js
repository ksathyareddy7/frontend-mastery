Array.prototype.myEntries = function () {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myEntries called on null or undefined"
    );
  }
  const array = Object(this);

  let index = -1,
    len = array.length;

  function next() {
    index++;
    if (index >= len) return undefined;
    return {
      value: [index, array[index]],
      done: index > len - 2,
    };
  }

  return { next };
};

const array1 = ["a", "b", "c"];

const iterator1 = array1.myEntries();

console.log(iterator1.next().value);
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
