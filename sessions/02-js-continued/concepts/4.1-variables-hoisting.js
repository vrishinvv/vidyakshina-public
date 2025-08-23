
/* --------------------------------------------------
   HOISTING EXAMPLES
   -------------------------------------------------- */

// 4️⃣ var HOISTING — declarations are moved to top, but not assignments
function varHoistingExample() {
  console.log('Before declaration, x =', x); // undefined (not error!)
  
  var x = 5;
  console.log('After assignment, x =', x); // 5
  
  // What JavaScript actually does:
  // var x; // hoisted to top
  // console.log('Before declaration, x =', x); // undefined
  // x = 5; // assignment stays in place
}

// 5️⃣ let/const HOISTING — they hoist but stay in "Temporal Dead Zone"
function letConstHoistingExample() {
  // console.log('Before declaration, y =', y); // ❌ ReferenceError: Cannot access 'y' before initialization
  
  let y = 10;
  console.log('After declaration, y =', y); // 10
  
  // console.log('Before declaration, z =', z); // ❌ ReferenceError: Cannot access 'z' before initialization
  const z = 20;
  console.log('After declaration, z =', z); // 20
}

// 6️⃣ FUNCTION HOISTING — entire function is hoisted
function functionHoistingExample() {
  // This works! Function declaration is fully hoisted
  console.log('Calling hoisted function:', hoistedFunction()); 
  
  function hoistedFunction() {
    return "I'm hoisted!";
  }
  
  // But function expressions are NOT fully hoisted
  // console.log('Calling function expression:', notHoisted()); // ❌ TypeError: notHoisted is not a function
  
  var notHoisted = function() {
    return "I'm not hoisted!";
  };
  
  console.log('After declaration, function expression works:', notHoisted());
}

// Run hoisting examples
console.log('\n=== VAR HOISTING ===');
varHoistingExample();

console.log('\n=== LET/CONST HOISTING ===');
letConstHoistingExample();

console.log('\n=== FUNCTION HOISTING ===');
functionHoistingExample();


