// სტრინგიდან ამოვიღოთ გამოყენებული ასოები

// const str1 = "h3olke";
// const str2 = "hello";

// function sortStrLetters(str) {
//   return str.split("").sort().join("");
// }

// function isContainLetter(str1, str2) {
//     let result = false;
//     // debugger
//   for(let i = 0; i < str2.length; i++) {
//     if(!str1.includes(str2[i])){
//         return result;
//     }
//   }
//   return true;
// }

// console.log(isContainLetter(str1, str2)); // True False

const str1 = "h3olke";
const str2 = "hello";

function isContainLetter(str1, str2) {
  let result = false;
  let usedLetters = [...str1];
  for (let i = 0; i < str2.length; i++) {
    const letterIndex = usedLetters.indexOf(str2[i]);
    console.log(letterIndex);
    if (letterIndex === -1) {
      return result;
    } else {
      usedLetters.splice(letterIndex, 1);
    }
  }
  return true;
}

console.log(isContainLetter(str1, str2)); // false
console.log(`////////////////////////////////////////////////////////////////`);

// https://www.w3resource.com/csharp-exercises/for-loop/index.php

//  15. calculate the factorial of a given number.
// Input the number : 5
// The Factorial of 5 is: 120
//  ვიპოვოთ რიცხვის ფაქტორიალი 5! = 1 * 2 * 3 * 4 * 5

function factorial(num) {
  let multiply = 1;
  for (i = 1; i <= num; i++) {
    multiply *= i;
    // console.log(multiply);
  }
  return multiply;
}

console.log(factorial(5));
console.log(factorial(3));

console.log(`////////////////////////////////////////////////////////////////`);

//  16. display the n terms of even natural number and their sum.
// Test Data :
// Input number of terms : 5
// Expected Output :
// The even numbers are :2 4 6 8 10
// The Sum of even Natural Number upto 5 terms : 30

function evenNumbersAndSum(n) {
  let sum = 0;
  let evenNumbers = [];

  for (let i = 1; i <= n; i++) {
    let evenNum = 2 * i;
    evenNumbers.push(evenNum);
    sum += evenNum;
  }

  console.log(`even number: ${evenNumbers.join(" ")}`);
  console.log(`sum of even natural numbers upto ${n}: ${sum}`);
}

evenNumbersAndSum(5);

console.log(`////////////////////////////////////////////////////////////////`);

//  18.
// find the sum of the series [ 1-X^2/2!+X^4/4!- .........].
// Test Data :
// Input the Value of x :2
// Input the number of terms : 5
// Expected Output :
// the sum = -0.415873
// Number of terms = 5
// value of x = 2.000000

function calculateSeriesSum(x, terms) {
  let sum = 0;
  let factorial = 1;
  let sign = 1;

  for (let i = 0; i < terms; i++) {
    if (i > 0) {
      factorial *= 2 * i * (2 * i - 1);
    }

    let term = Math.pow(x, 2 * i) / factorial;

    sum += sign * term;
    sign *= -1;
  }

  console.log(`The sum = ${sum.toFixed(6)}`);
  console.log(`Number of terms = ${terms}`);
  console.log(`Value of x = ${x.toFixed(6)}`);
}

calculateSeriesSum(2, 5);

//  19. Display the n terms of harmonic series and their sum.
// 1 + 1/2 + 1/3 + 1/4 + 1/5 ... 1/n terms
// Test Data :
// Input the number of terms : 5
// Expected Output :
// 1/1 + 1/2 + 1/3 + 1/4 + 1/5 +
// Sum of Series upto 5 terms : 2.283334

function harmonicSeriesSum(n) {
  let sum = 0;
  let series = [];

  for (let i = 1; i <= n; i++) {
    let term = 1 / i;
    series.push(`1/${i}`);
    sum += term;
  }

  let seriesString = series.join(" + ") + " +";
  console.log(seriesString);
  console.log(`Sum of Series up to ${n} terms : ${sum.toFixed(6)}`);
}

harmonicSeriesSum(5);
