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
