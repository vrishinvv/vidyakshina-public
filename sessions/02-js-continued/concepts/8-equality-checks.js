/*
    --------------------------------------------------
    LOOSE vs STRICT EQUALITY (== vs ===)
      ==  → compares after type-coercion
      === → compares value AND type (recommended)
    --------------------------------------------------
*/
console.log("'5' == 5  →", '5' == 5); // true   (string → number)
console.log("'5' === 5 →", '5' === 5); // false  (different types)

// Quick sanity test
const ageInput = '18';
if (ageInput == 18) console.log("== thinks you're 18 🤔");
if (ageInput === 18) console.log("=== confirms you're 18 ✅");
else console.log('=== says types differ ❌');
