// Task 1: Variables and Data Types

var myVar = "Hello, world!";
document.write("Value of myVar: " + myVar);
document.write("<br>");
document.getElementById("demo").innerHTML = myVar;

let myLet = 42;
document.write("Value of myLet: " + myLet);
document.write("<br>");

document.getElementById("demo").innerHTML = myLet;

const myConst = true;
document.write("Value of myConst: " + myConst);
document.write("<br>");

document.getElementById("demo").innerHTML = myConst;


// Task 2: Operators and Expressions

function Number(a, b) {
  var sum = a + b;
  var diff = a - b;
  var product = a * b;
  var quotient = a / b;

  return {
    sum: sum,
    diff: diff,
    product: product,
    quotient: quotient
  };
}

var result = Number(14, 5);
document.write("Sum: " + result.sum);
document.write("<br>");

document.write("Difference: " + result.diff);
document.write("<br>");
document.write("Product: " + result.product);
document.write("<br>");
document.write("Quotient: " + result.quotient);
document.write("<br>");


// Task 3: Control Flow

var age = parseInt(prompt("Enter your age:"));

if (age < 18) {
  document.write("You are a minor.");
  document.write("<br>");
  document.getElementById("demo").innerHTML = "You are a minor.";
} else if (age >= 18 && age <= 65) {
  document.write("You are an adult.");
  document.write("<br>");
  document.getElementById("demo").innerHTML = "You are an adult.";
} else {
  document.write("You are a senior citizen.");
  document.write("<br>");
  document.getElementById("demo").innerHTML = "You are a senior citizen.";
}


//Task 4: Functions

function findMinMaxSalary(salaries) {

  var minSalary = salaries[0];
  var maxSalary = salaries[0];

  for (var i = 1; i < salaries.length; i++) {
    if (salaries[i] < minSalary) {
      minSalary = salaries[i];
    }

    if (salaries[i] > maxSalary) {
      maxSalary = salaries[i];
    }
  }

  return {
    min: minSalary,
    max: maxSalary
  };
}

var salaries = [50000, 60000, 45000, 70000, 55000];
var result1 = findMinMaxSalary(salaries);

document.write("Minimum Salary: " + result1.min + "<br>");
document.write("<br>");
document.write("Maximum Salary: " + result1.max + "<br>");
document.write("<br>");


//Task 5: Arrays and Objects

var favoriteBooks = [
  "It ends with us",
  "It starts with us",
  "Ugly",
  "Wings of fire"
];

function displayBookTitles(books) {
  for (var i = 0; i < books.length; i++) {
    document.write(books[i] + "<br>");
  }
}

displayBookTitles(favoriteBooks);

//Task 6:Scope and Hoisting 


function myFunction() {
  var localVar = "Local variable";
  let localLet = "Local let";
  const localConst = "Local const";

  console.log(localVar);
  console.log(localLet);
  console.log(localConst);
}

myFunction();

console.log(localVar);
console.log(localLet);
console.log(localConst);


//Task 7: DOM Manipulation

var button = document.getElementById("myButton");

button.addEventListener("click", function () {
  button.textContent = "Button Clicked!";
});



//Task 8: Error Handling

function checkPositiveNumber(number) {
  if (number < 0) {
    throw new Error("Number must be positive.");
  }

  return number;
}

try {
  var result = checkPositiveNumber(-5);
  console.log("Result:", result);
} catch (error) {
  console.log("Error:", error.message);
}



//Task 9: Asynchronous JavaScript

function simulateAsyncOperation(callback) {
  setTimeout(function () {

    var result = "Operation completed.";

    callback(result);
  }, 2000);
}

function handleResult(result) {
  console.log("Result:", result);
}

console.log("Starting asynchronous operation...");
simulateAsyncOperation(handleResult);
console.log("Asynchronous operation initiated.");