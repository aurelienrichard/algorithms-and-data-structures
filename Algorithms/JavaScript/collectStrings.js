// COLLECtSTRINGS

// Write a function called 'collectStrings' which accepts an object and returns an array of all the values in the object that have a type of string

const collectStrings = (obj) => {
  let output = [];
  Object.values(obj).forEach((value) => {
    if (typeof value === 'string') output.push(value);
    else if (value.toString() === '[object Object]')
      output = output.concat(collectStrings(value));
  });
  return output;
};

// TEST

const obj = {
  stuff: 'foo',
  data: {
    val: {
      test: [],
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // [ 'foo', 'bar', 'baz' ]
