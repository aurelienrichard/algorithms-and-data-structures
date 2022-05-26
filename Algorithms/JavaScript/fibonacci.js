// FIBONACCI

// returns nth position of a Fibonacci sequence using recursion and memoization

const memo = { 1: 0, 2: 1 };

const fibonacci = (n) => {
  if (Object.prototype.hasOwnProperty.call(memo, n)) return memo[n];
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memo[n] = result;
  return result;
};

// TEST

console.log(fibonacci(22)); // 10946
console.log(fibonacci(31)); // 832040
