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
