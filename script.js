// დავადგინოთ მოცემული რიცხვი მარტივია თუ არა

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(13));
console.log(isPrime(12));
console.log(isPrime(15));

// უდიდესი ელემენტი მასივში

function highiestNumberInArrays(arr) {
  let max = arr[0][0];
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      if (arr[j][i] > max) {
        max = arr[j][i];
      }
    }
  }
  return max;
}
console.log(
  highiestNumberInArrays([
    [1, 3, 4, 6, 8, 1, 4],
    [4, 7, 8, 9, 4],
  ])
);
console.log(
  highiestNumberInArrays([
    [1, 3, 4, 10, 8, 1, 4],
    [4, 7, 8, 9, 4],
  ])
);

function highestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(highestNumber([1, 3, 4, 6, 8, 1, 4]));
console.log(highestNumber([4, 7, 8, 9, 4]));

// ორ მასივს მიიღებს და ერთიან დასორტირებულ მასივს აბრუნებს

function sortedArray(arr1, arr2) {
  return [...arr1, ...arr2].sort();
}

console.log(sortedArray([1, 4, 6, 7, 4], [3, 6, 5, 4, 3]));

// იმ შემთხვევაში თუ დალაგებულია ორივე ზრდადობით სხვანაირად დავალაგოთ

console.log(sortedArray([1, 4, 6, 7, 4], [3, 6, 5, 4, 3]).reverse());

// fibonacci recursion

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(11));

function getFibonacciNumber(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(getFibonacciNumber(6));
console.log(getFibonacciNumber(10));
console.log(getFibonacciNumber(11));

//  ორი მასივიდან უნდა შეამოწმოს მეორე მასივის რომელიმე ელემენტი
//  პირველის რომელიმე ელემენტი თუ ემთხვევა

function isInclude(arr1, arr2) {
  return arr1.some((e) => arr2.includes(e));
}

console.log(isInclude(["a", "e", "o", "u", "i"], ["s", "o", "u", "i"]));

// სტრინგს გადააქცევს სათაურად ყოველი ახალი სიტყვა დაიწყოს დიდი ასოთი 

function convertToTitle(str) {
  let words = str.split(" ");
  let capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

console.log(convertToTitle("dfsjfjsfs gfhhfh"));
console.log(convertToTitle("dsfjsl kfdsjljkd ksfljljk"));

