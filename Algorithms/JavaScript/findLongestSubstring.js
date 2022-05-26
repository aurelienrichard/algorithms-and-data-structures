// FINDLONGESTSUBSTRING

// Write a function called 'findLongestSubstring', which takes a string as an input and returns the length of the longest substring with all distinct characters.

const findLongestSubstring = (str) => {
  let [maxLength, substring] = [0, ''];
  str.split('').forEach((char) => {
    const idx = substring.indexOf(char);
    if (idx !== -1) {
      substring = substring.slice(idx + 1);
    }
    substring += char;
    maxLength = Math.max(substring.length, maxLength);
  });
  return maxLength;
};

// TEST

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
