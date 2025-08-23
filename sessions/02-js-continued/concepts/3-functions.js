/* --------------------------------------------------
   FUNCTIONS: Basics and Callbacks
-------------------------------------------------- */

// Basic function
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Asha');

// Function with return
function add(a, b) {
  return a + b;
}

console.log('5 + 3 =', add(5, 3));

// Function as a variable (arrow)
const multiply = (a, b) => {
  return a * b;
}
console.log('4 * 6 =', multiply(4, 6));

// Callback example
function processUserInput(input, callback) {
  console.log('Received input:', input);
  callback(input.toUpperCase());
}

processUserInput('sai', (upperName) => {
  console.log('Callback processed name:', upperName);
});

// function inside a variable
const a = function() {
  console.log('This is a function assigned to a variable');
}
a(); // Call the function


// A callback is a function passed as an argument to another function
const b = (anotherFunction) => {
  console.log('This is another function assigned to a variable');
  anotherFunction(); // -> we call this a callback
}
b(a); // Call b, which calls a inside it 



/* --------------------------------------------------
   SIMPLE FUNCTION CALLING EXAMPLE
   -------------------------------------------------- */

// Simple example of calling one function from another
function first() {
  console.log('1. Starting in first()');
  second(); // Control jumps to second()
  console.log('4. Back in first()');
}

function second() {
  console.log('2. Now in second()');
  third(); // Control jumps to third()
  console.log('3. Back in second()');
}

function third() {
  console.log('   → Inside third()');
  // Control returns to second()
}

console.log('\n=== SIMPLE FUNCTION CALLING ===');
first(); // Start here and watch the flow
