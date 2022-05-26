// MAXSUBARRAYSUM

// Write a function called 'maxSubarraySum' which takes an array of integers as an input and a number called 'n'. The function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = arr.slice(0, n).reduce((acc, curr) => acc + curr);
  let currSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    currSum = currSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};

// TEST

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
