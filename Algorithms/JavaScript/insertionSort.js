// INSERTIONSORT

// Insertion Sort sorting algorithm O(n²)

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j > -1 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = curr;
  }
  return arr;
};

// TEST

console.log(insertionSort([453, 21, 209, 93, 11, 74, 5]));
// [ 5,  11,  21, 74, 93, 209, 453 ]
