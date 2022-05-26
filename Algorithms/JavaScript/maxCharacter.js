// MAX CHARACTER

// Return an array of one or more characters that occur the most in a string
// ex. maxCharacter('javascript') == ['a']

const getCounts = (array) =>
  array.reduce((acc, curr) => {
    const counts = { ...acc };
    counts[curr] = counts[curr] + 1 || 1;
    return counts;
  }, {});

const maxCharacter = (str) => {
  const chars = str.toLowerCase().match(/[a-z]/g);
  const counts = getCounts(chars);
  const maxValue = Math.max(...Object.values(counts));
  return Object.keys(counts).filter((key) => counts[key] === maxValue);
};

// TEST

console.log(maxCharacter('JavaScript is awesome.'));

// [ 'a', 's' ]
