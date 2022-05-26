// MERGESORT

// Merge Sort sorting algorithm O(n log n)

const merge = (left, right) => {
  const arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) arr.push(left.shift());
    else arr.push(right.shift());
  }
  return [...arr, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const [left, right] = [
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid)),
  ];
  return merge(left, right);
};

// TEST

console.log(mergeSort([32, 67, 88, 13, 50]));
// [ 13, 32, 50, 67, 88 ]
