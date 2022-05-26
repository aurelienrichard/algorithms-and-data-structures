// NESTEDEVENSUM

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objets.

const nestedEvenSum = (obj) => {
  let output = 0;
  Object.values(obj).forEach((value) => {
    if (value.toString() === '[object Object]') output += nestedEvenSum(value);
    else if (value % 2 === 0) output += value;
  });
  return output;
};

// TEST

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
