Array.prototype.myFlat = function (level = 1) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFlat called on null or undefined");
  }
  const array = Object(this);
  const result = [];

  function helper(arr, level, result) {
    if (level === 0) {
      result.push(...arr);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          helper(arr[i], level - 1, result);
        } else {
          result.push(arr[i]);
        }
      }
    }
  }

  helper(array, level, result);
  return result;
};

const arr1 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr1.myFlat()); // expected output: [0, 1, 2, [3, [4, 5]]]

console.log(arr1.flat(2)); // expected output: Array [0, 1, 2, 3, [4, 5]]

console.log(arr1.flat(5)); // expected output: Array [0, 1, 2, 3, 4, 5]
