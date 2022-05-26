// BINARYSEARCH

// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise return -1.

const binarySearch = (sortedArr, targetValue) => {
  let [start, end] = [0, sortedArr.length - 1];
  while (start < end) {
    const mid = Math.floor(start + end / 2);
    if (sortedArr[mid] === targetValue) return mid;
    if (sortedArr[mid] < targetValue) start += 1;
    else end -= 1;
  }
  return -1;
};

// TEST

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
