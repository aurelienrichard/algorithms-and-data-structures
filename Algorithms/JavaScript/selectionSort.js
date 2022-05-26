// SELECTIONSORT

// Selection Sort sorting algorithm O(n²)

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
};

// TEST

console.log(selectionSort([92, 0, 33, 78, 2, 10, 37, 51]));
// [0,  2, 10, 33, 37, 51, 78, 92 ]
