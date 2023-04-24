// examples of conditionals

const isLoggedIn = true;
if (isLoggedIn) {
  // This code will execute because isLoggedIn is true => A valid condition
}

const isLoggedIn2 = true;
if (!isLoggedIn2) {
  // This code will NOT execute because isLoggedIn is true but ! inverts it (in this check)
} else {
  // This would execute because !isLoggedIn yields false => else block executes
}

const age = 30;

let userCategory; // should be 'child', 'adult' or 'senior'

function solve() {
  // Todo: Set userCategory conditionally
  // Important: You must put your condition into this solve function!
  if (age < 18) {
    userCategory = "child";
  } else if (age >= 18 && age < 65) {
    userCategory = "adult";
  } else if (age >= 65) {
    userCategory = "senior";
  }
}

// SWITCH CASE

switch (ev) {
  case LOG_EVENT_PLAYER_ATTCK:
    logEntry.target = "MONSTER";
    break;
  case LOG_EVENT_PLAYER_STRONG_ATTACK:
    logEntry.target = "PLAYER";
    break;
  default:
    logEntry = {};
}

// LOOPS

// for loop

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// for-of loop execute for every element in an array

for (const el of array) {
  console.log(el);
}

//for in loop
for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

//example if accessing object key value pairs in an array

let i = 0;

for (const logeEntry of battleLog) {
  console.log(`#${i}`);
  for (const key in logeEntry) {
    console.log(key);
    console.log(logEntry[key]);
    // this will access the value of the inputed key. that the loop will get as it iterates.
  }
  i++;
}

// while loop

while (isLoggedInd) {}

//e.g

let randonNumbers = [];

let finished = false;

while (!finished) {
  const rndNumber = Mathrandom();
  randonNumbers.push(rndNumber);
  if (rndNumber > 0.5) {
    finished = true;
    console.log(randonNumbers);
  }
}

// do while loop
let j = 0;

do {
  console.log(j);
  j++;
} while (j < 3);

// try catch

try {
  chosenMaxLife = getMaxLifeValues();
  //this will be executed first and if it fails it will go to the catch
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
} finally {
  // this will always execute
}
