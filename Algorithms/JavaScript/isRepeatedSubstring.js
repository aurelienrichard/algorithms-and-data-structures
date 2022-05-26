// ISREPEATEDSUBSTRING

// Given a string, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

const isRepeatedSubstring = (str) => str.repeat(2).slice(1, -1).includes(str);

// TEST

console.log(isRepeatedSubstring('abab')); // true
console.log(isRepeatedSubstring('aba')); // false
console.log(isRepeatedSubstring('abcabcabcabc')); // true
