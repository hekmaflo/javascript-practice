// Defining & Declaring Variables

let currentResult = 0;
let result;

currentResult = currentResult + 10 * 3;

//Strings
let calculationDescroption = "currentResult + 10 * 3";

// Functions

function greetUser(name) {
  alert("Hi" + name);
}

greetUser();

// another example

function add(num1, num2) {
  const result = num1 + num2;
  alert(`The result is ${result}`);
}

add(1, 2);

// Returing Function Values

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

add(1, 2);

//the return statement will now return the value of result. at the moment it will not go anywhere since there isnt a variable to store it in the global scope but if you do:

const additionResult = add(1, 2);

//this will put the result into the additonResult variable.

//MORE on returning FUnctions

function add(num1, num2) {
  result = num1 + num2;
  return result;
}

add(1, 2);
// this function will give a value to the result at the beggining of this code.

// but it is better to keep it in the first version since it will not change any global code in unexpected ways.
