// QUICKSORT

// Quick Sort sorting algorithm O(n log n)

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivotValue = arr[start];
  let pivotIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      pivotIdx += 1;
      swap(arr, i, pivotIdx);
    }
  }
  swap(arr, start, pivotIdx);
  return pivotIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1);
  }
  return arr;
};

// TEST

const arr = [4, 8, 2, 1, 5, 7, 23, -3, 98];

console.log(quickSort(arr)); // [ -3, 1,  2,  4, 5, 7, 8, 23, 98 ]
