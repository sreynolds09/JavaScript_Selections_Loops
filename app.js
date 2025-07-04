console.log("Hello World!\n==========\n");

// Exercise 1: Ignore Even
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("EXERCISE 1:\n==========\n");

// Exercise 2: FIZZBUZZ
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  }
}
console.log("EXERCISE 2:\n==========\n");

// Exercise 3: Repeat with While and Do/While
// Odd numbers with while loop
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// FIZZBUZZ with while loop
i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  }
  i++;
}

// Odd numbers with do/while loop
i = 1;
do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);

// FIZZBUZZ with do/while loop
i = 1;
do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  }
  i++;
} while (i <= 100);

console.log("EXERCISE 3:\n==========\n");

// Exercise 4: Find Value
let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;

for (let i = 0; i <= n; i++) {
  if (i === value) {
    console.log("Found value!");
    found = true;
    break;
  }
}

if (!found) {
  console.log("Did not find value");
}

console.log("EXERCISE 4:\n==========\n");


// Exercise 5: Customized FIZZBUZZ
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++) {
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
    console.log("FIZZBUZZ");
  } else if (i % fizzDivisor === 0) {
    console.log("FIZZ");
  } else if (i % buzzDivisor === 0) {
    console.log("BUZZ");
  }
}