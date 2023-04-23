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

## Quiz (Booleans)

Which part of the if statement will be executed in the below example?

const val1 = 10;
const val2 = 5;
if (val1 + val2 > 16) {
// A
} else {
// B
}

B will be executed, val1 + val2 results in a value of 15, which is smaller than 16, hence we reach the else block (B)!

Which part of the if statement will be executed in the below example?

const val1 = 10;
const val2 = 5;
if (val1 + val2 < 15) {
// A
} else if (val1 === '10') {
// B
} else if (val2 > 4) {
// C
} else {
// D
}

C will be executed

Which part of the if statement will be executed in the below example?

const val1 = 10;
const val2 = 5;
if (val1 + val2 === '15') {
// A
} else if (val1 + val2 == 15) {
// B
} else if (val2 > 4) {
// C
} else {
// D
}

B will be executed, val1 + val2 is equal to 15. Here we even compare that number to another number, so we could've used "===" as well. But for "==" (where we only compare the value, not the type), the result is of course still "true".

How many block of an if-else if-else statement can be executed?

Only one ( or none, if no condition is met and no else block exists.) In an if statement, you will never execute more than one block. If no condition is met and no else block exists (which is not a must-have), NO code will be executed

What's the role of the ! operator?

It negates a condition (e.g. check for inequality).

What does this expression yield?

5 + 2 === 7 && 4 > 5 || 'Hi' === 'Hi'

It yields true

That's correct! The first part (the && part) yields false because 4 is NOT greater than 5. But the second part (after ||) yields true ('Hi' is equal to 'Hi').

What's evaluated first in the below expression?

5 + 5 === 10 && 3 < 5 && 10 > 9 || 'Hi' === 'Hi'

the 5 + 5 part. the addition operator has precedence over the logic operators (&& and ||).

# Falsy and Thruthy Values

How JS ecaluates conditions. e.g.

Conts nameInput = "Max"

if (nameInput === "Max"){...}

const nameInput = 'Max';

if (nameInupt) {...} this would be truthy because nameInput has a string

0 in a variable would be considered false

Negative numbers are considered as TRUE

empty string is FALSE

all other objects or arrays TRUE

null, undefined, NaN FALSE

## Quiz (Truthy Falsy)

Which part of the code will be executed in the below if statement?

const userName = 'Max';
if (userName) {
// A
} else if (userName === 'Max') {
// B
} else {
// C
}

A will be executed

Which part of the code will be executed in the below if statement?

let age;
if (age) {
// A
} else if (age === null) {
// B
} else {
// C
}

C is exeuted

Is -10 a "truthy" or a "falsy" value?

its a Truthy value.

What's stored in userAge after the below code executed?

const userAge = 30;
if (userAge) {
// do something
} else {
// do something else...
}

userAge still holds 30 as a value.
