/*  
    In synchronous code, tasks run sequentially. Each step blocks the next until it finishes. 
    In asynchronous code, some tasks start and finish later—meanwhile, the program can continue doing other work.
*/

function stepA() { console.log("A done"); }
function stepB() { console.log("B done"); }
function stepC() { console.log("C done"); }

console.log("Start");
stepA();   // completes now
stepB();   // runs only after A
stepC();   // runs only after B
console.log("End");
// Output order: Start → A done → B done → C done → End
