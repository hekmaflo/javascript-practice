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

## Quiz (Logical Operators)

What's stored in userName at the end of the below code?

const enteredValue = '';
const userName = enteredValue || 'DEFAULT';

answer is 'DEFAULT'

'' is a falsy value, hence the || operator moves on to the second operand (i.e. the value AFTER ||) and returns that value.

What's stored in userName at the end of the below code?

const enteredValue = '';
const userName = enteredValue || null;

answer is null

The first value (which is an empty string) is falsy and hence the second value (second operand) is returned - even if that operand is also falsy (which it is in this example).

What's stored in userName at the end of the below code?

const enteredValue = 'Max';
const userName = enteredValue || 'Anna';

answer 'Max'

'Max' is a non-empty string and therefore a truthy value. The || operator returns that first value (first operand) if it is truthy.

What's stored in userName at the end of the below code?

const enteredValue = 'Max';
const userName = enteredValue && 'Anna';

answer Anna

if the first value is truthy, the && operator ALWAYS returns the second value (second operand).

What's stored in userName at the end of the below code?

const enteredValue = '';
const userName = enteredValue && 'Anna';

answer '' empty string

If the first operand is falsy, && always returns the first operand, NEVER the second one.

What's stored in userName at the end of the below code?

const enteredValue = 'Max';
const userName = enteredValue && '';

answer '' emptry string

If the first value if truthy, the && operator ALWAYS returns the second value (the second operand), even if that operand should be falsy.

What does the follow code yield?

const userName = 'Max';
console.log(!!userName);

answer is true

! negates (inverts) a value AND always returns/ produces a boolean. So !'Max' would yield false (because 'Max' is truthy => negated + boolean = false). With the additional ! operator, the value is negated again, so false becomes true.

What does the follow code yield?

const userName = 'Max';
console.log(!userName);

answer is false

The ! operator negates the value and generates a boolean. 'Max' is truthy, so the negated boolean version indeed is false.

# Switch-case Statement

switch(ev){
case LOG_EVENT_PLAYER_ATTCK:
logEntry.target = "MONSTER"
break;
case LOG_EVENT_PLAYER_STRONG_ATTACK:
logEntry.target = "PLAYER"
break;

}

# LOOPS

to execute code multiple times.

4 types:

for loop - execude code a certain amount of times via variable.e.g.

for (let i =0; i < 3; i++){
console.log(i)
}

for-of loop - execute for every element in an array

for (const el of array) {
console.log(el);
}

for-in loop - execute for every key in an object

for (const key in obj){
console.log(key);
console.log(obj[key]);
}

while loop - execute code as long as condition is true

while (isLoggedInd){
...
}

### More while loops

let j = 0

while (j < e){
console.log('------')
j++;
}

// do while loop
let j = 0;

do {
console.log(j);
j++;
} while (j < 3);

## Quiz (Loops - Basics)

Why do Loops exist?

Because you sometimes need to execute the same code(maybe with different, dynaimc values) multilpe times.

What does the following loop produce as output?

let sum = 0;
for (let i = 2; i <= 6; i++) {
sum = sum + i;
}
console.log(sum); // ???

answer, 20

The loop starts at i = 2 and then runs up to (including) i = 6. All numbers are added together: 2 + 3 + 4 + 5 + 6 = 20

What does the following loop produce as output?

let sum = 0;
for (const i = 2; i <= 6; i++) {
sum = sum + i;
}
console.log(sum); // ???

AN error is thrown, You must not use const for the variable that should change with every iteration (because constants can't change).

What does the following loop produce as output?

let sum = 0;
for (let i = 0; i < 3; i++) {
for (let j = 5; j > 2; j--) {
sum = sum + j + i;
}
}
console.log(sum); // ???

Answer is 45, The inner loop runs for every execution of the outer loop - and it then counts down from 5 to 3. So we add 0 + 5 + 0 + 4 + 0 + 3 + 0 + 5 + 1 + 4 + 1 + 3 + 1 + 5 + 2 + 4 + 2 + 3 + 2 = 45

What does the following loop produce as output?

let sum = 0;
for (let i = 0; i < 3; i++) {
for (let j = 5; j > 2; j--) {
sum = j + i;
}
}
console.log(sum); // ???

answer is 5, note that we DON'T add sum when we produce a new sum. So sum is always just j + i - which means that for the last iteration of that overall loop, we execute 3 (j) + 2 (i) = 5

What does the following loop produce?

const hobbies = ['Sports', 'Cooking', 'Coding'];
let favoriteHobby;
for (const hobby of hobbies) {
favoriteHobby = hobby;
}
console.log(favoriteHobby);

answer is 'Coding', favoriteHobby stores the hobby in each iteration - so the last iteration's value survives.

What's the main difference between for-of and for-in loops?

for-of loops are used for arrays, for-in loops for objects.

the primary difference is that for-of loops were built to give you an easy way to loop through array elements, for-in loops exist to make going through object properties easy.

## Controlling loops with break

let i = 0;

for (const logeEntry of battleLog) {
console.log(`#${i}`);
for (const key in logeEntry) {
console.log(key);
console.log(logEntry[key]);
// this will access the value of the inputed key. that the loop will get as it iterates.
}
i++;
break;
}

you can use break to break out of a loop. This would only show you the first element.

## Quiz (break & continue)

What does break do?
it ends/stops loop execution.

What does continue do?

it continue with the next loop iteration and stops the current one.

What's the result of the below code?

let sum = 0;
for (let i = 0; i < 5; i++) {
sum = sum + i;
break;
}
console.log(sum); // ???

Answer is 0, It's NOT 0 because the loop would never execute though. It runs once but the first value for i is equal to 0. So sum = 0 + 0 => stays 0. After that first execution, break stops the loop and hence the sum of 0 is being output.

What's the result of the below code?
let sum = 0;
for (let i = 0; i < 5; i++) {
for (let j = 0; j < 2; j++) {
sum = sum + i + j;
break;
}
}
console.log(sum); // ???

Answer is 10, The inner loop always stops after the first execution, so j never exceeds a value of 0 (and hence doesn't contribute much to the sum calculation). But the outer loop is NOT stopped by break (only the "nearest" loop is). So the sum DOES take the changing value of i into account.

What's the result of the below code?

let sum = 0;
for (let i = 0; i < 5; i++) {
for (let j = 0; j < 2; j++) {
sum = sum + i + j;
continue;
}
}
console.log(sum); // ???

Answer 25, continue actually has no effect here. We call it after all inner loop code has been executed, so we move on to the next iteration - something that would've happened anyways. The outer loop is not affected by continue (it affects its "nearest" loop).

Question 6:
What's the result of the below code?

let sum = 0;
for (let i = 0; i < 5; i++) {
for (let j = 0; j < 2; j++) {
if (i >= 2) {
continue;
}
sum = sum + i + j;
}
}
console.log(sum); // ???

Answer is 4, The inner loop basically becomes useless once i reaches a value of 2. The sum isn't changed anymore from that point on. Hence the overall result is 0 (i) + 0 (j) + 0 (i) + 1 (j) + 1 (i) + 0 (j) + 1 (i) + 1 (j) = 4

## Error Handling

situations to use Error handling User input Errors, network errors.

try {...} catch(error){}

try {
chosenMaxLife = getMaxLifeValues();
//this will be executed first and if it fails it will go to the catch
} catch (error){
console.log(error);
chosenMaxLife = 100;
}

Which kind of error should you typically handle via try-catch?

Network errors

What goes into the try {} block?

the code that could throw and error.

What goes into the catch {} block?

The error handling and fallback logic.

# Behind the Scenes of Javascript.

## ES5 vs ES6 syntax

var vs let & const

let is able to change
const not able to change

let- creates a variable
var- creates a variable
const - creates a constant

var - available always
let - Available since ES6
const - Available since ES6

var - create variables at Function & global scope

let - Block Scope

const - Block Scope

## Hoisting

## Quiz (JS specialties)

What's the most important difference between var and let/ const?

var has global/function(local) scope, let and const have block scope.

Does this code execute correctly?

console.log(name);
const name = 'Max';

No, const and let don't work like var when it comes to hoisting (this example would've worked with var).

## Primitive vs Reference Values

Primitive values and Reference Values are the Two categorie of types/values in JavaScript

Primitive values: Strings, Numbers, Booleans, null, undefined, symbol. stored in stack memory and do not take much memory when used.

Copying a variable ( = assign to a different variable) copies the value.

let name = 'Max'

let anotherUser = name;

anotherUser is Max

name = 'Manuel';

anotherUser is still equal to Max

Reference Values:
All other objects

Store in memory(heap) variable stores a pointer (address) to location in memory.

Copying a variable(= assignt to different variable) copies the pointer/reference

let hobbies = ['Sports']

## Spread operator

e.g.

let person = {age: 32}

let yetAnotherPerson = { ...person}

this will copy all the key value pairs of the person object.

// you can change person for e.g.

person.age = 30;

yetAnotherPerson would still be 32

---

let hobbies = ['Sports'];

let moreHobbies = [...hobbies]

hobbies.push('Cooking');

moreHobbies would still only have Sports

# More About Functions

different ways of creatng functions

anon functions

callback functions & fnctions in functions

default arguments & rest operator

## Functions vs Methods

function startGame(){
console.log('Game is starting...')
}

method is inside an object like so:

const persone = {
greet: function greet(){
console.log('Hello there!')
}
};

person.greet();

### Functions are Objects
