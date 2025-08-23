/* --------------------------------------------------
   DATA-TYPES & TYPE-COERCION
   -------------------------------------------------- */

// -- Primitives ---------------------------------------------------------
const bool = false; // Boolean
const num = 42; // Number
const str = '42'; // String
const undef = undefined; // Undefined
const nulVal = null; // Null

// typeof reveals the runtime type
console.log(typeof bool, typeof num, typeof str); // boolean number string


/*
Key take-aways
• JS has 7 primitive types + objects
• typeof null === 'object' (legacy quirk)
• Coercion happens implicitly with many operators—know the rules!
*/
