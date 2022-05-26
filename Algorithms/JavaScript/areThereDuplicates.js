// ARETHEREDUPLICATES

// Write a function called 'areThereDuplicates' which accepts a variable number // of arguments as an input, and checks whether there are any duplicates among /// the arguments passed in.

const areThereDuplicates = (...args) => new Set(args).size !== args.length;

// TEST

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
