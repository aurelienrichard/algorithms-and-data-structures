// STRINGIFYNUMBERS

// Write a function called 'stringifyNumbers' which tapes in an object and finds all of the values which are numbers and converts them to strings.

const stringifyNumbers = (obj) => {
  const output = {};
  Object.keys(obj).forEach((key) => {
    const current = obj[key];
    if (typeof current === 'number') output[key] = current.toString();
    else if (current.toString() === '[object Object]')
      output[key] = stringifyNumbers(current);
    else output[key] = current;
  });
  return output;
};

// TEST

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
// {
//   num: '1',
//   test: [],
//   data: { val: '4', info: { isRight: true, random: '66' } },
// };
