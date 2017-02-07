// Section 1

// What types are these?

/* 1.1 */ 1; //number
/* 1.2 */ "cat"; //string
/* 1.3 */ true; //boolean
/* 1.4 */ []; //object
/* 1.5 */ {}; //object
/* 1.6 */ 1.1; //number
/* 1.7 */ var myVariable; //undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; //true
/* 2.2 */ "cat"; //true
/* 2.3 */ true; //true
/* 2.4 */ NaN; //false
/* 2.5 */ []; //true
/* 2.6 */ {}; //true
/* 2.7 */ undefined; //false
/* 2.8 */ ""; //false
/* 2.9 */ 0; //false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var num = 4;
// 3.2 Assign a variable that is a string
var str = "hi i'm a string"
// 3.3 Assign a variable that is a boolean
var bool = true;
// 3.4 Assign a variable that is an object

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var raccoon = animals[0];
// 5.2. Assign the last element to a variable
var gerbil = animals[animals.length - 1];
// 5.3. Assign the length of an array to a variable
var arrayLength = animals.length;
// 5.4. Add an item to the end of the array
animals.push("otter");
// 5.5. Add an item to the start of the array
animals.unshift("hamster");
// 5.6. Assign the index of hedgehog to a variable
var hedgehogIndex = animals.indexOf("hedgehog");



// Section 6

// 6.1 Create an array of 5 vegetables
var vegetables = ["cabbage", "carrot", "cucumber", "courgette", "turnip"]
// 6.2 Loop over the array and write to the console using a "while"
var i = 0;
while (i < vegetables.length) {
  console.log(vegetables[i]);
  i++;
}
// 6.3 Loop again using a "for" with a counter
for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}
// 6.4 Loop again using a "for of"
for (var vegetable of vegetables) {
  console.log(vegetable);
}


// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
var total = 0;
for (var account of accounts) {
  total += account.amount;
}
console.log("Total in accounts: " + total);
// 7.2 Find the amount of money in the account with the largest balance
var max = 0;
for (var account of accounts) {
  if (account.amount > max) {
    max = account.amount;
  }
}
console.log("Max amount: " + max);
// 7.3 Find the name of the account with the smallest balance
var minAmount = accounts[0].amount;
var minAmountName = "";
for (var account of accounts) {
  if (account.amount < minAmount) {
    minAmount = account.amount;
    minAmountName = account.name;
  }
}
console.log(minAmountName + " has the account with the smallest balance (" + minAmount + ")");
// 7.4 Calculate the average bank account value
var averageValue = total / accounts.length;
console.log("Average value: " + averageValue);
// 7.5 Find the value of marcs bank account
var marcsAccountValue = NaN;
for (var account of accounts) {
  if (account.name === "marc") {
    marcsAccountValue = account.amount;
  }
}
console.log("Marc has " + marcsAccountValue + " in his account.");
// 7.6 Find the holder of the largest bank account
var maxAmount = 0;
var maxAmountName = "";
for (var account of accounts) {
  if (account.amount > max) {
    maxAmount = account.amount;
    maxAmountName = account.name;
  }
}
console.log(maxAmountName + " has the largest bank account");

// 7.7 Calculate the total cash in business accounts
var totalBusiness = 0;
for (var account of accounts) {
  if (account.type === "business") {
    totalBusiness += account.amount;
  }
}
console.log("Total Business: " + totalBusiness);

// 7.8 Find the largest personal account owner
var maxPersonal = 0;
var maxPersonalName = "";
for (var account of accounts) {
  if (account.type === "personal" && account.amount > maxPersonal) {
    maxPersonal = account.amount;
    maxPersonalName = account.name;
  }
}
console.log(maxPersonalName + " has the largest personal account.");


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method