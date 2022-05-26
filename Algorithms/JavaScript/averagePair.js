// AVERAGEPAIR

// WRite a function called 'averagePair'. Given a sorted array of integers and /// a target average, determine if there is a pair of values in the array where /// the average of the pair equals the target average.

const getAverage = (x, y) => x + y / 2;

const averagePair = (sortedArray, targetAverage) => {
  let [start, end] = [0, sortedArray.length - 1];
  while (start < end) {
    const average = getAverage(sortedArray[start], sortedArray[end]);
    if (average === targetAverage) return true;
    if (average < targetAverage) start += 1;
    else end -= 1;
  }
  return false;
};

// TEST

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
