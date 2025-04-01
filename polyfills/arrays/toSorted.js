Array.prototype.myToSorted = function (compareFn) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myToSorted called on null or undefined"
    );
  }
  const array = Object(this);

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

  // Create a new array and Sort the array using merge sort
  const sortedArray = mergeSort([...array]);

  // Return the reference to the in place sorted array
  return sortedArray;
};

const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.myToSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.myToSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
