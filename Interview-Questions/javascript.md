- Types of variables in JS
  const, let, var

- Difference between let, var, const
  const cannot be reassigned, let it can be assigned, and var can be reassigned but its not blocked scoped.

- What is hoisting and why does it exist
  Declaring a variable in a function that can be pulled to the global scope. const with arrow functions could not be hoisted meaning that if you where to call the function before its created it wont work . using the function keyboard will work.

hello()

function hello () {
console.log('gg')
}
// function above would work.

hello();

const hello = () = {
console.log('gg')
}

//the code above would not work.

- What is Object.prototype & proto (and example with getPrototypeOf, setPrototypeOf)

What is the difference between a class and an object?
class
7

- What is the this keyword, when do we use it
  is used inside a class or object to make sure you are using that spicific method or variable.
  8
- What is the difference between a normal function and an arrow function
- What is a promise
  A way to run async code to back end and be able to run code
  so if you make a call to an api and it's successful it would then run the code in the .then() if it dosent work it will run the code in the .catch() it usually just gives back a consle error e.g. .catch(console.error) and lastly you can use a .finally() to run additional code
  10
- How do we use promises outside of async/await

  11 - What does it mean for something to be mutable and immutable? Which types of variables are mutable and
  which are immutable? (with some follow-up questions on mutability in React)
  mutable means a variabke that its able to change in the future.

  immutable means that that it wont be able to change and it will remain the same.

  12

- What is closure and give an example
  13
- Why are block-scoped (rather function-scoped) variables not available after we've exited a function
  14 - Everything about front-end caching (and
