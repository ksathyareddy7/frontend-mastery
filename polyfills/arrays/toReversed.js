Array.prototype.myToReversed = function () {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myToReversed called on null or undefined"
    );
  }
  const array = Object(this); // makes compatible with all the types of elements
  const result = [];
  for (let index = array.length - 1; index >= 0; index--) {
    result.push(array[index]);
  }
  return result;
};

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.myToReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
