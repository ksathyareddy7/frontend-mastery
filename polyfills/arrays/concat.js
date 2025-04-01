Array.prototype.myConcat = function (...arrays) {
  if (this == null) {
    throw new TypeError("Array.prototype.myConcat called on null or undefined");
  }
  const array = Object(this);

  let result = [...array];

  for (let index = 0; index < arrays.length; index++) {
    if (!Array.isArray(arrays[index])) {
      throw new TypeError(arrays[index] + " is not a array");
    }
    result = [...result, ...arrays[index]];
  }

  return result;
};

const array1 = [5, 12, 8, 130, 44];

const result = array1.myConcat(["red", "blue", "green"], ["john", "jane"]);

console.log(result);
