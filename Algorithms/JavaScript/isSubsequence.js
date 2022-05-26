// ISSUBSEQUENCE

// Write a function called 'isSubsequence' which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.

const isSubsequence = (substring, string) => {
  if (substring.length === 0) return true;
  if (string.length === 0) return false;
  if (substring[0] === string[0])
    return isSubsequence(substring.slice(1), string.slice(1));
  return isSubsequence(substring, string.slice(1));
};

// TEST

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
