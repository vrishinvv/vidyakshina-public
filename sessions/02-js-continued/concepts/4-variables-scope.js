/* --------------------------------------------------
   VARIABLES & SCOPE
   -------------------------------------------------- */
// 1️⃣  var  — function-scoped
function oldSchoolVar() {
  for (var i = 0; i < 3; i++) {
    console.log('var loop i =', i);
  }
  console.log('after loop, i is still in scope →', i); // i is 3
}

// 2️⃣  let  — block-scoped, re-assignable
function modernLet() {
  for (let j = 0; j < 3; j++) {
    console.log('let loop j =', j);
  }
  // console.log(j); // ReferenceError → j lives only inside the for-block
}

// 3️⃣  const — block-scoped, **cannot be re-assigned** (but objects can mutate)
const PI = 3.14159;
// PI = 3; // ❌  TypeError

oldSchoolVar();
modernLet();
console.log('const PI =', PI);



/*
WHY IT MATTERS:
• Prefer const when the identifier itself never changes
• Use let for variables that will change in the same block
*/