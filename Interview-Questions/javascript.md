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

## //the code above would not work.

- What is Object.prototype & proto (and example with getPrototypeOf, setPrototypeOf)
  What is the difference between a class and an object
  7
- What is the this keyword, when do we use it
  8
- What is the difference between a normal function and an arrow function
- What is a promise
  10
- How do we use promises outside of async/await
  11 - What does it mean for something to be mutable and immutable? Which types of variables are mutable and
  which are immutable? (with some follow-up questions on mutability in React)
  12
- What is closure and give an example
  13
- Why are block-scoped (rather function-scoped) variables not available after we've exited a function
  14 - Everything about front-end caching (and