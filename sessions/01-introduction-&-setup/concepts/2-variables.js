/* --------------------------------------------------
   VARIABLES & SCOPE (BASICS)
   -------------------------------------------------- */

// 1️⃣  var  — function-scoped (but here, just basic assignment)
var x = 10;
console.log('var x =', x);

// 2️⃣  let  — block-scoped, re-assignable
let y = 20;
console.log('let y =', y);

// 3️⃣  const — block-scoped, **cannot be re-assigned** (but objects can mutate)
const PI = 3.14159;
console.log('const PI =', PI);

// PI = 3; // ❌  TypeError

/*
WHY IT MATTERS:
• Prefer const when the identifier itself never changes
• Use let for variables that will change in the same block
• var is old and rarely needed
*/