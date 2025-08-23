/* --------------------------------------------------
   OPERATORS CHEAT-SHEET
   -------------------------------------------------- */
const a = 8, b = 3;

// 1️⃣  Arithmetic
console.log('a + b =', a + b); // 11
console.log('a ** b =', a ** b); // exponentiation → 512 

// 2️⃣  Comparison (return booleans)
console.log('a > b ?', a > b); // true
console.log("a === '8' ?", a === '8'); // strict equality (false)

// 3️⃣  Logical
console.log('a > 5 && b < 5 =', a > 5 && b < 5); // true
console.log('!(a === b) =', !(a === b)); // true

// 4️⃣  Assignment variants
let c = 10;
c += 2; // same as c = c + 2
console.log('c after += 2 →', c);
