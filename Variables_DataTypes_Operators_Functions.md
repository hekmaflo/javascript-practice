## Variables & Constants

A "data container"/ "data storage"
ex. Let userName = "Max";
userName = "Manu"; would reassign userName variable and would not need a let since it was already declared

const totalUsers = 15

is a constant meaning that it cannot be change.

Use constants as often as possible (whenever you have values that aren't changing.)

## Variable Naming

Allowed naming:

Best Practice: camelCase e.g userName

Only Letters and digits.

Starting with $ is allowed e.g $kindOfSpecial

Starting with \_ is allowed eg \_internalValue

NOT recommmended:

eg. let user_name

starting with digits is not allowed eg. let 21Players

NO special characters

NO keywords allwoed eg let let

## Working with Variable & Operators

#### Operators

- Adds two numbers

* Subtracts two numbers

- Multioplies two numbers

/ Divides two numbers

% Divide two numbers, yield remaiinder

\*\* Exponentatios

## Quiz Questions

What's a variable?
A data container (where the data can be changed during program execution).

What's a constant?
It's a data container where the value CAN'T be changed.

In the following example - what's the variable and what's the data of the variable?

let userAge = 30;

userAge is the variable and 30 is the data.

Could you replace this snippet

let age = 30;
alert(age);
with this one

alert(30);
and still get the same result?

YES, age is a variable that stores 30 as a value. Whenever you refer to the variable, you could also directly use the value (without storing it in a variable) first.

Why do we need variables?

Variables can store data that may change during program execution. So hard-coding isn't always an option. Adtitionally, the same value might be needed in multiple places. Using a variable allows you to refer to that bariabkle and only change the value in one place instead of multiple places in code.

Which kind of operator is the = operator?

It's an assigment operator (assigns a value).

## Data Types

Numbers: 2, -3, 22.956 important for calculations and code where you need to work with a number

Strings: "Hi", 'Hi', `Hi` is imporatant for outputting results, gathering input.

## Using Constants

eg. const defaultResult = 0;
let currentResult = defaultResult;

this will assign defaultResult to currentResult but currentResult will be allowed to change.

defaultResult will never change at any point.

## More on Strings

CANNOT mix single or double quotes.

best way to work with variables inside a string. is using back ticks or called template literal.

e.g.

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`

\n inside a string will add a line break

## Quiz Questions (Data types & Constants)

Where do "data types" come into play?

Data you work with in your code is of different type - e.g. numbers, text, booleans, etc.

Is 30 the same as '30'?

NO, one is a num the other a string.

Given that JavaScript is a weakly typed, dynamic language, would you expect that this code works?

let myName = 'Max';
myName = 30;

Indeed, this snippet works. Even though the type of data changes when we assign a new value, the variable won't complain. Variables in JavaScript are NOT tied to data types.

## Introducing Functions

Can be reffered as "code on demand" e.g

function greetUser(name) {
alert("Hi" + name);
}

greetUser();

You can (but dont have to) use parameters and you can (but dont have to ) return values (via return).

you call a Function once you want to use it e.g.

greetUser('Max');

can use it as often as you want, passing different paramer values

Every fuinction execuiton then runs independent from (possible) other executions.

More examples:

function add(num1, num2) {
const result = num1 + num2;
alert(`The result is ${result}`);
}

add(1, 2);
add(5, 5);

in this case anything inside the function cannot be accessed by the global scope only inside the function.

## Returing Function Values

function add(num1, num2) {
const result = num1 + num2;
return result;
}

add(1, 2);

the return statement will now return the value of result. at the moment it will not go anywhere since there isnt a variable to store it in the global scope but if you do:

const additionResult = add(1,2);

this will save the result inro the additionResult variable.

## Intro to Global & Local Scopes

Refering back to our function we can have:

let result; (in the global scope)

function add(num1, num2) {
result = num1 + num2
return result;
}

add(1,2);

this would change the result variable in the global scope.

but it is better to keep it in the first version since it will not change any global code in unexpected ways. refere line 162

Using a global variable inside a function, is possible and this process is called shadowed variables.

### More on return

anything after return will statement not work.

when adding an event listener make sure you dont add any parameters. e.g.

addBtn.addEventListener('click', add);

this is executing functions indirectly.

in the lesson the function to get the info of num1 and num2 looks like:

function add(){
const result = currentResult + userInput.value;
return result;
}

addBtn.addEventListener('click', add);

## Quiz (functions)

What's a "Function"?
A function defines code which dosen't execute right away but which can be executed multiple times by calling the function.

Please explain what's what in this function:

function greetUser(name) {
alert('Hi ' + name);
}

function is the keyword, greetUser is the function name, name is the parameter, and alert("Hi" + name); is the function body.

What are "function parameters"?

Data that can be provided to the functon(input) - available only inside of the function, like local variables.

Which kind of variables live in the "local scope"?

variables declared inside of functions.

Where can you use "global scope" variables?

Everywhere in the script, including functions.

What's a "shadowed variable"?

A local variable , declared in a function that also exists as a global variable.

## parseInt

is used to turn a string to a intiger e.g.
paresInt(userInput.value); or +userInput.value

you can also turn intigers to strings with toString();

e.g currentResult.toString();

## shorthand operators

currentResult += enteredNumber;
currentResult -= enteredNumber;
currentResult \*= enteredNumber;
currentResult /= enteredNumber;

## More Core Data Types

Booleans have value of true/false
important for conditional code and situations wehre you only have 2 options.
