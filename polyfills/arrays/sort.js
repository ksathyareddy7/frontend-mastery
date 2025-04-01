Array.prototype.mySort = function (compareFn) {
  if (this == null) {
    throw new TypeError("Array.prototype.mySort called on null or undefined");
  }
  const array = this;
  const len = array.length;

  // Default comparison function (compares elements as strings)
  if (typeof compareFn !== "function") {
    compareFn = function (a, b) {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    };
  }

  // Merge Sort Algorithm
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  // Merge function to merge two sorted arrays
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (compareFn(left[i], right[j]) <= 0) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    // Concatenate remaining elements
    return result.concat(left.slice(i), right.slice(j));
  }

  // Sort the array using merge sort and copy back to the original array
  const sortedArray = mergeSort(array);

  // Copy the sorted array back into the original array
  for (let i = 0; i < len; i++) {
    array[i] = sortedArray[i];
  }

  // Return the reference to the in place sorted array
  return array;
};
