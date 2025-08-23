/* --------------------------------------------------
    TRUTHY / FALSY
   --------------------------------------------------
*/

/* 1️⃣ TRUTHY / FALSY VALUES
      Anything that coerces to **false** in Boolean context:
      • false, 0, '', null, undefined, NaN
*/
const maybeEmpty = '';
if (maybeEmpty) {
  console.log("This won't run, '' is falsy");
} else {
  console.log("'' is falsy → else branch"); // will run
}

console.log(Boolean('0')); // true  (non-empty string → truthy)
console.log(Boolean(0)); // false (number zero  → falsy)
