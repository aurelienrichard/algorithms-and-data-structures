// FIZZBUZZ

// Write a program that prints all the numbers from 1 to a given number.
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
};

// TEST

fizzBuzz(15);

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
