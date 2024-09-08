// დავთვალოთ რაოდენობა

function count(arr, el) {
  return arr.filter((x) => x === el).length;
}

console.log(count([1, 3, 4, 5, 1, 2, 3], 3));
console.log(count([1, 3, 4, 1, 1, 2, 3], 1));

// გამეორებული ელემენტების ამოღება

function removeDublicate(arr) {
  const array = Array.from(new Set(arr));
  return array;
}
console.log(removeDublicate([1, 3, 4, 5, 1, 2, 3]));
console.log(removeDublicate([1, 3, 4, 1, 1, 2, 3]));

//

function flatten(arr) {
  //   return arr.flat();
  return [].concat(...arr);
}
console.log(flatten([[1, 2, 3, 3], 4, 7, 8, [1, 2, 3]]));

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (const num of arr) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
console.log("////////////////////////////////////////////////////////////////");
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// ([2, -1, 2, 3, -9]) == 6

const students = [
  {
    name: "anano",
    age: 29,
    occupation: "front-end",
    details: {
      tel: 73642,
      address: "123 Main St",
    },
  },
  {
    name: "jon doe",
    age: 44,
    occupation: "back-end",
    details: {
      tel: 43642,
      address: "435 Main St",
    },
  },
];

students.map((student) => {
  for (const key in student) {
    console.log(key, student[key]);
  }
});

console.log(students[0].details.tel);

const student2 = {
  name: "anano",
  age: 29,
  occupation: "front-end",
};
const student3 = {
  name: "anano",
  age: 29,
  occupation: "front-end",
};

// for (const key in student2) {
//   console.log(key, student2[key]);
// }


function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    // debugger;
    if (keys1[i] !== keys2[i] && obj1[keys1[i]] !== obj2[keys2[i]]) {
      return false;
    }
  }
  return true;
}

console.log(compareObjects(student2, student3));

const student = {
  5: "anano",
  2: 29,
  3: "front-end",
};

console.log(student[1]);
console.log(student);

// ფუნქციას გადაეცემა რიცხვი, და აბრუნებს ამრიცხვზე მეტ უმცირეს პალინდრომს.
// მაგ. გადაეცემა: 24; აბრუნებს: 33;
// გადაეცემა: 33; აბრუნებს: 44;
// გადაეცმა: 120; აბრუნებს 121;

function findNextPalindrome(num) {
  function isPalindrome(n) {
    const str = n.toString();
    return str === str.split("").reverse().join("");
  }
  let nextNum = num + 1;
  while (!isPalindrome(nextNum)) {
    nextNum++;
  }

  return nextNum;
}

console.log(findNextPalindrome(24));
console.log(findNextPalindrome(33));
console.log(findNextPalindrome(120));
