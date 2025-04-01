Array.prototype.myWith = function (index, value) {
  if (this == null) {
    throw new TypeError("Array.prototype.myWith called on null or undefined");
  }

  const array = Object(this);
  array[index] = value;
  return array;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
