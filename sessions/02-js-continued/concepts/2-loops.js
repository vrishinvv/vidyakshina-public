/* --------------------------------------------------
   LOOPS: For loop only
-------------------------------------------------- */

// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Number: ${i}`);
}

// Loop over an array
const colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(`Color at index ${i}: ${colors[i]}`);
}


const nums = [10, 20, 30, 40];
// another way to iterate an array
for (const num of nums) {
  console.log('Number:', num);
}
