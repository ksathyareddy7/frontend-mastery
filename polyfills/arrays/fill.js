Array.prototype.myFill = function (value, start = 0, end = this.length) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFill called on null or undefined");
  }
  const array = Object(this);
  const len = array.length;
  // Step 1: Convert start and end to integers
  start = Math.trunc(start) || 0;
  end = Math.trunc(end) || len;

  // Step 2: Handle negative indices
  if (start < 0) {
    start = Math.max(len + start, 0);
  }

  if (end < 0) {
    end = Math.max(len + end, 0);
  }

  // Step 3: Handle the case when end > len, fill till the end of the array
  end = Math.min(end, len);

  // Step 4: Handle the case when start >= len, do nothing
  if (start >= len) {
    return array;
  }

  // Step 5: Loop from start to end and fill the array with the value
  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
};

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.myFill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
