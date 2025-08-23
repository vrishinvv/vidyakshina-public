/* --------------------------------------------------
   INPUT & OUTPUT IN NODE
   -------------------------------------------------- */
// Console output is dead-simple:
console.log('👋  Hello, JS world!'); // console.log writes to stdout 

// --- Reading CLI arguments --------------------------------------------
console.log('process.argv demo:', process.argv); // array of CLI tokens

// node inputOutput.js Alice
const nameFromArg = process.argv[2] || 'Stranger';
console.log(`Hi, ${nameFromArg} (from argv)!`);

const prompt = require('prompt-sync')();
const favNumber = prompt("What's your favourite number? ");
console.log(`Great choiceee: ${favNumber}`); 

const favNumberAgain = prompt("What's your favourite number again? ");
console.log(`Great choice: ${favNumberAgain}`);


