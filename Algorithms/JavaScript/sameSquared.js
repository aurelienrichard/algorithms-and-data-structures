// SAMESQUARED

// Write a function called 'sameSquared' which takes two arrays as an input. The function returns true if every value in the first array has its corresponding value squared in the second array. The order does not matter, but the frequency of values must be the same

const getCounts = (array) =>
  array.reduce((acc, curr) => {
    const counts = { ...acc };
    counts[curr] = counts[curr] + 1 || 1;
    return counts;
  }, {});

const sameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const arr1Squared = arr1.map((n) => n ** 2);
  const counts = getCounts(arr1Squared);
  return arr2.every((n) => {
    if (!counts[n]) return false;
    counts[n] -= 1;
    return true;
  });
};

// TEST

console.log(sameSquared([1, 2, 3], [4, 1, 9])); // true
console.log(sameSquared([1, 2, 3], [1, 9])); // false
console.log(sameSquared([1, 2, 1], [4, 4, 1])); // false
