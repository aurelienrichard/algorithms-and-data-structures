// FLATTEN

// Write a recursive function called 'flatten' which accepts an array of arrays and returns a new array with all values flattened

const flatten = (oldArr) => {
  let newArr = [];
  oldArr.forEach((element) => {
    if (Array.isArray(element)) newArr = newArr.concat(flatten(element));
    else newArr.push(element);
  });
  return newArr;
};

// TEST

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[1], [[2]], [[[[3]]]]]])); // [1, 2, 3]
