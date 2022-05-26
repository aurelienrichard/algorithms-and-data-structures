// BUBBLESORT

// Bubble Sort sorting algorithm O(n²)

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

// TEST

console.log(bubbleSort([234, 43, 55, 63, 5, 6, 235, 547]));
// [5, 6, 43, 55, 63, 234, 235, 547]
