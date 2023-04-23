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

## CONDITIONAL EXPRESSION / TERNARY OPERATOR

e.g const userName= isLogin? 'Max' : null

max would be the value if condition is true and null would be the value is condition is false

## Logical operators and shorthands

boolean coercion via double NOT operator (!!)

default value assignment via OR operator ||

e.g const name = someInput || 'Max'

this would yield true

how to hold different values in variables e.g.

const realUserInput = 'Manu';

const realUserName = realUserInput || 'Max'

realUserName would now hold value 'Manu'

NOW USING AND Operator

let isLoggedIn = true;

const shoppingCart = isLoggedIn && ['Books']

shoppingCart will have ["Books"]

isLoggedIn = false

isLoggedIn && ['Books']
would be false

As a reference which you can come back to (or print out), here's a quick summary of how logical operators and comparison operators behave in JavaScript:

const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'Max'

console.log(userName || null); // userName is truthy and therefore returned by || => 'Max'
console.log(altName || 'Max'); // altName is falsy (empty string), hence 'Max' is returned => 'Max'
console.log(altName || ''); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || 'Anna'); // altName and null are falsy, 'Anna' is returned => 'Anna'

console.log(userName && 'Anna'); // userName is truthy, hence second (!) value is returned => 'Anna'
console.log(altName && 'Anna'); // altName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is returned => ''
Always keep in mind: NO operator (neither ===, > etc. nor && or ||) changes the variable you might be using in the comparison. In the above examples, the values stored in userName and altName are NEVER changed.

===, > etc. just generate new boolean values which are used in the comparison. || and && generate NO booleans, they just treat the values before and after them as conditions (which therefore need to yield boolean values and are coerced to booleans if required).

Because of the above-described behaviors, you often use || in JavaScript to assign default/ fallback values to variables/ constants:

const enteredValue = ''; // let's assume this is set based on some input provided by the user, therefore it might be an empty string

const userName = enteredValue || 'PLACEHOLDER'; // will assign 'PLACEHOLDER' if enteredValue is an empty string
