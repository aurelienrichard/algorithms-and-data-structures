// SORTING TWISTED 3 AND 7

// create a method that can sort an array the way it would be sorted
// if the values of 3 and 7 were twisted

// ex:
// [1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
// [12,13,14] -> [12,14,13]
// [9,2,4,7,3] -> [2,7,4,3,9]

const transmute = (value) => {
  const transmutedValue = String(value).replace(/[37]/g, (digit) =>
    digit === '3' ? '7' : '3'
  );
  return Number(transmutedValue);
};

const sortTwisted37 = (arr) =>
  [...arr].sort((a, b) => transmute(a) - transmute(b));

// TEST

console.log(sortTwisted37([19, 94, 78, 87, 33, 105, -3, 69, 93, -7]));

// [-3, -7, 19, 78,  69, 33, 87, 94, 93, 105]
