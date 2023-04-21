# Control Sturctures

Includes:

Conditional Statements (if statements) & Expressions

Boolena Values & Operators

Loops in JavaScript

Error Handling

## Conditional Code Execution

important for conditional Code: Return True or False

== used to compared two values
!= check for value inequality
=== and !== check for value AND Type

e.g. 2 === 2 equals TRUE
2 === "2" would be FALSE

=== and !== is prefered over == or !=

> & < check for value that is greater / smaller

> = & <= check for valeu being greater or equal / smaller or equal

! check if NOT true

### e.g of a control flow statement

if (takeConditionHere === 0) {
This code will be executed if condition is met.
} else {
this code will execute if condition is not met.
}

### else if

if (takeConditionHere === 0) {
This code will be executed if condition is met.
} else if (takeConditionHere === 1){
this code will execute if condition is met.
} else {
this code will execute if conditions are not met.
}

## Beware of Objects & Arrays in Comparisons

{name: 'Max'} == or === {name: 'Max'}

will be false, because objects and arrays are different.

const person1 = {name: 'Max'};

const person2 = {name: 'Max'};

person1 === person2

FALSE

const hobbies = ['Sports', 'Cooking']

const moreHobbies = ['Sports', 'Cooking']

hobbies === moreHobbies

FALSE

person1.name === person2.name

TRUE

## Combining Conditions

AND = &&
OR = ||

e.g.

if (
calculationType !== 'ADD' && calculationType !== 'SUBTRACT' &&calculationType !== 'MULTIPLY' && calculationType !== 'DIVIDE') {

}

## Operator Precedence

for more info:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
