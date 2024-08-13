///////////////////////////////////////////////////////////////

// 1. Write a JavaScript program that displays the largest integer among two integers.

function largestInteger(a, b) {
  return a > b ? a : b;
}

console.log(largestInteger(5, 8));
console.log(largestInteger(10, 4));

// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

function sign(a, b, c) {
  const multiply = a * b * c;
  if (multiply > 0) {
    console.log("The sign is +");
  } else if (multiply === 0) {
    console.log("The sign is 0");
  } else {
    console.log("The sign is -");
  }
}

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// function sort(a, b, c) {
//   const lowerNumber = a < b ? a : b;
//   const lowest = lowerNumber < c ? lowerNumber : c;

//   const higherNumber = a < b ? b : a;
//   const highest = higherNumber > c ? higherNumber : c;

//   let middleNumber;

//   if (lowest < a && a < highest) {
//     middleNumber = a;
//   } else if (lowest < b && b < highest) {
//     middleNumber = b;
//   } else if (lowest < c && c < highest) {
//     middleNumber = c;
//   }

//   console.log(middleNumber);
//   console.log(highest, middleNumber, lowest);
// }

// sort(0, -1, 4);
// sort(6, 4, -3);

function sortNumbers(num1, num2, num3) {
  let numbers = [num1, num2, num3];
  numbers.sort((a, b) => b - a);
  // numbers.sort((a, b) => a - b);
  console.log(...numbers);
}

sortNumbers(0, -1, 4);

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

function largestNumber(...numbers) {
  const highest = Math.max(...numbers);
  const lowest = Math.min(...numbers);
  const middleNumbers = numbers.filter(
    (num) => num !== highest && num !== lowest
  );
  middleNumbers.sort((a, b) => b - a);
  console.log(`Highest: ${highest}`);
  console.log(`Middle numbers: ${middleNumbers.join(", ")}`);
  console.log(`Lowest: ${lowest}`);
}

largestNumber(-5, -2, -6, 0, -1);

// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
  console.log(`${i} is ${i % 2 === 0 ? "Even" : "Odd"}`);
}

// 6. 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

const students = {
  David: 80,
  Vinoth: 77,
  Divya: 88,
  Ishitha: 95,
  Thomas: 68,
};

let totalMarks = 0;
let studentCount = 0;

for (const student in students) {
  totalMarks += students[student];
  studentCount++;
}

const averageMarks = totalMarks / studentCount;

const grade =
  averageMarks < 60
    ? "F"
    : averageMarks < 70
    ? "D"
    : averageMarks < 80
    ? "C"
    : averageMarks < 90
    ? "B"
    : "A";

console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Grade: ${grade}`);

// 7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

function fizzBuzz(number) {
  let result = "";
  if (number % 3 === 0) {
    result += "Fizz";
  }
  if (number % 5 === 0) {
    result += "Buzz";
  }
  return result === "" ? number : result;
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

// Function to calculate the sum of squares of digits of a number
function sumOfSquares(num) {
  return sumOfDigitPow(num, 2)
}

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1
// (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers,
// while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

// function sumOfSquares(num) {
//   let sum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sum += digit * digit;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// !!!!

function isHappy(num) {
  let seen = new Set();
  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    num = sumOfSquares(num);
  }
  return num === 1;
}

function findHappyNumbers(count) {
  let happyNumbers = [];
  let number = 1;

  while (happyNumbers.length < count) {
    if (isHappy(number)) {
      happyNumbers.push(number);
    }
    number++;
  }

  console.log(`First ${count} happy numbers:`, happyNumbers);
}

findHappyNumbers(5);

// 9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

function amstrongNumber(num) {
  return sumOfDigitPow(num, 3) === num;
}

console.log("///////////")
console.log(amstrongNumber(153));
console.log(amstrongNumber(370));
console.log(amstrongNumber(371));
console.log(amstrongNumber(407));
console.log(amstrongNumber(271));

function sumOfDigitPow(num, pow){
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum+= Math.pow(digit, pow)
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("////////////////");
console.log(sumOfDigitPow(2, 2));

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}


// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. 
// !!!!


// 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.

function sumMultiples(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
      }
  }

  return sum;
}

const limit = 1000;
console.log(`The sum of multiples of 3 and 5 below ${limit} is ${sumMultiples(limit)}`);
