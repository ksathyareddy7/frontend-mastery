Array.prototype.mySplice = function (start, deleteCount, ...items) {
  if (this == null) {
    throw new TypeError("Array.prototype.mySplice called on null or undefined");
  }
  const array = Object(this);
  const len = array.length;

  // Handle negative start index
  if (start < 0) {
    start = Math.max(len + start, 0);
  }

  // If start is greater than the array length, set it to the length
  if (start > len) {
    start = len;
  }

  // Handle deleteCount
  deleteCount = deleteCount === undefined ? len - start : deleteCount;

  // If deleteCount is greater than the number of elements after start, delete all elements from start
  deleteCount = Math.min(Math.max(deleteCount, 0), len - start);

  // Create an array of the elements to be removed
  const removedItems = array.slice(start, start + deleteCount);

  // Adjust the array to remove elements from start to start + deleteCount
  const newArrayLength = len - deleteCount + items.length;
  for (let i = len - 1; i >= start + deleteCount; i--) {
    array[i + items.length] = array[i]; // Shift elements right
  }

  // Insert new elements at the specified start position
  for (let i = 0; i < items.length; i++) {
    array[start + i] = items[i];
  }

  // Truncate the array to the new length
  array.length = newArrayLength;

  // Return an array of the removed elements
  return removedItems;
};
