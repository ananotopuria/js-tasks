// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country.
// Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  details() {
    console.log(`${this.name} ${this.age} ${this.country}`);
  }
}

const Person1 = new Person("John", 23, "us");
const Person2 = new Person("Doe", 22, "us");

Person1.details();
Person2.details();

// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
// Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle'
// class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calcArea() {
    return this.width * this.height;
  }
  calcPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const Rectangle2 = new Rectangle(2, 4);
const Rectangle3 = new Rectangle(5, 10);

console.log(
  `area rectangle2: ${Rectangle2.calcArea()}`,
  `area reclangle3: ${Rectangle3.calcArea()}`
);
console.log(
  `perimeter rectangle2: ${Rectangle2.calcPerimeter()}`,
  `perimeter rectangle3: ${Rectangle3.calcPerimeter()}`
);

// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year.
// Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle'
// class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  details() {
    console.log(`make: ${this.make}`);
    console.log(`model: ${this.model} `);
    console.log(`year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  details() {
    super.details();
    console.log(`doors: ${this.doors}`);
  }
}

const car1 = new Car("Mercedes", "E-Class", 1999, 4);
car1.details();

// 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance.
// Include methods to deposit and withdraw money from the account.
// Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(number, balance) {
    this.number = number;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    } else {
      console.log("not valid number");
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
    } else if (amount > this.balance) {
      console.log("Insufficient balance.");
    } else {
      console.log("not valid number");
    }
  }
  displayBalance() {
    console.log(`Account Number: ${this.number}, Balance: $${this.balance}`);
  }
}

const account1 = new BankAccount(123456, 500);
const account2 = new BankAccount(789012, 1000);

account1.deposit(300);
account2.deposit(400);
account1.withdraw(200);
account2.withdraw(1000);
account1.displayBalance();
account2.displayBalance();

// 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
// Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method.
// Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor(shape) {
    this.shape = shape;
  }
  calcArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calcArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calcArea() {
    return 0.5 * this.base * this.height;
  }
}

const circle = new Circle(5);
console.log(`circle area: ${circle.calcArea()}`);

const triangle = new Triangle(6, 10);
console.log(`triangle area: ${triangle.calcArea()}`);

// 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.
// Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee'
// class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers.
// Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const annualSalary = super.calculateAnnualSalary();
    const bonus = 0.1 * annualSalary;
    return annualSalary + bonus;
  }
}

const manager1 = new Manager("jhon", 5000, "Sales");
const manager2 = new Manager("doe", 6000, "Marketing");

console.log(
  `${manager1.name}'s Annual Salary: $${manager1.calculateAnnualSalary()}`
);
console.log(
  `${manager2.name}'s Annual Salary: $${manager2.calculateAnnualSalary()}`
);

// 7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year.
// Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and
//  includes an additional property for book price. Override the display method to include the book price. Create an
//   instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }
  displayDetails() {
    super.displayDetails();
    console.log(`Price: $${this.price.toFixed(2)}`);
  }
}

const ebook1 = new Ebook(
  "A Court of Mist and Fury",
  "Sarah J. Maas",
  2016,
  15.2
);

ebook1.displayDetails();

// 8. Write a JavaScript program that creates a class called 'Animal' with properties for species and sound.
// Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal'
// class and adds an additional property for color. Override the make sound method to include the dog's color.
// Create an instance of the 'Dog' class and make it make its sound.

class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.species} makes a sound: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }
  makeSound() {
    console.log(`${this.color} ${this.species} goes: ${this.sound}`);
  }
}

const dog1 = new Dog("Dog", "Woof", "White");
const cat1 = new Dog("Cat", "Meaw", "Black");

dog1.makeSound();
cat1.makeSound();

//   9. Write a JavaScript program that creates a class called Bank with properties for bank names and branches.
//   Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank
//   class and perform operations to add and remove branches.

class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch) {
    this.branches.push(branch);
    console.log(`Branch "${branch}" added to ${this.name}.`);
  }
  removeBranch(branch) {
    const index = this.branches.indexOf(branch);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Branch "${branch}" removed from ${this.name}.`);
    } else {
      console.log(`Branch "${branch}" not found in ${this.name}.`);
    }
  }
  displayBranches() {
    if (this.branches.length === 0) {
      console.log(`No branches available for ${this.name}.`);
    } else {
      console.log(`Branches of ${this.name}:`);
      this.branches.forEach((branch) => {
        console.log(`- ${branch}`);
      });
    }
  }
}

const myBank = new Bank("City Bank");

myBank.addBranch("Downtown Branch");
myBank.addBranch("Uptown Branch");
myBank.displayBranches();

myBank.removeBranch("Uptown Branch");
myBank.displayBranches();

myBank.removeBranch("Suburb Branch");

// 10. Write a JavaScript program that creates a class called Product with properties for product ID, name, and price.
// Include a method to calculate the total price by multiplying the price by the quantity.
// Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property
// for the warranty period. Override the total price calculation method to include the warranty period.
//  Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(productId, name, price) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }
  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}
class PersonalCareProduct extends Product {
  constructor(productId, name, price, warrantyPeriod) {
    super(productId, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }
  calculateTotalPrice(quantity) {
    const basePrice = super.calculateTotalPrice(quantity);
    const warrantyCost = this.warrantyPeriod * 5;
    return basePrice + warrantyCost;
  }
}

const shampoo = new PersonalCareProduct(101, "Moisturizing Shampoo", 10.99, 2);

const quantity = 3;
const totalPrice = shampoo.calculateTotalPrice(quantity);

console.log(`Product: ${shampoo.name}`);
console.log(`Product ID: ${shampoo.productId}`);
console.log(`Unit Price: $${shampoo.price}`);
console.log(`Warranty Period: ${shampoo.warrantyPeriod} years`);
console.log(`Total Price for ${quantity} units: $${totalPrice}`);

// 11. Write a JavaScript program that creates a class called BankAccount with properties for account number,
// account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts.
// Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount2 {
  constructor(accountNumber, accountHolderName) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = 0;
  }
  deposit1(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.balance += amount;
    console.log(
      `$${amount} deposited. New balance: $${this.balance.toFixed(2)}`
    );
  }
  withdraw1(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(
      `$${amount} withdrawn. New balance: $${this.balance.toFixed(2)}`
    );
  }
  transfer(amount, recipientAccount) {
    if (amount <= 0) {
      console.log("Transfer amount must be positive.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds for transfer.");
      return;
    }
    this.withdraw1(amount);
    recipientAccount.deposit1(amount);
    console.log(
      `$${amount} transferred to ${recipientAccount.accountHolderName}.`
    );
  }
  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolderName}`);
    console.log(`Balance: $${this.balance.toFixed(2)}`);
  }
}

const account3 = new BankAccount2("123456789", "Alice");
const account4 = new BankAccount2("987654321", "Bob");

account3.deposit1(1000);
account4.withdraw1(250);
account3.transfer(200, account4);
account4.deposit1(500);
account3.displayAccountInfo();
account4.displayAccountInfo();

// 12. Write a JavaScript program that creates a class called University with properties for university name and departments.
// Include methods to add a department, remove a department, and display all departments. Create an instance of the University
// class and add and remove departments.

class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    if (!this.departments.includes(department)) {
      this.departments.push(department);
      console.log(`Department '${department}' added to ${this.name}.`);
    } else {
      console.log(`Department '${department}' already exists in ${this.name}.`);
    }
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department '${department}' removed from ${this.name}.`);
    } else {
      console.log(`Department '${department}' does not exist in ${this.name}.`);
    }
  }

  displayAllDepartments() {
    if (this.departments.length === 0) {
      console.log(`No departments available in ${this.name}.`);
    } else {
      console.log(`Departments in ${this.name}:`);
      this.departments.forEach((department, index) => {
        console.log(`${index + 1}. ${department}`);
      });
    }
  }
}

const university = new University("Greenwood University");

university.addDepartment("Computer Science");
university.addDepartment("Mathematics");
university.addDepartment("Physics");
university.displayAllDepartments();
university.removeDepartment("Mathematics");
university.displayAllDepartments();
university.removeDepartment("Biology");
