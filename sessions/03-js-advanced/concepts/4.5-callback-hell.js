/* what if i wanted to order dessert too, only after I eat pizza??
    -> then I have to write more code, and it gets messy.
    This is called Callback Hell.
*/


function getFood(requestedFood, callback) {
  setTimeout(() => {
    const foods = ["pizza", "dosa"];
    const prepared = foods[Math.floor(Math.random() * foods.length)];
    callback(prepared); 
  }, 700);
}

function orderDessert(requestedDessert, callback) {
  setTimeout(() => {
    const desserts = ["cheesecake", "fruit-salad"];
    const prepared = desserts[Math.floor(Math.random() * desserts.length)];
    callback(prepared);
  }, 600);
}

function generateBill(mainCourse, dessert, callback) {
  setTimeout(() => {
    const prices = { pizza: 250, dosa: 120, cheesecake: 180, "fruit-salad": 140 };
    const total = (prices[mainCourse] || 0) + (prices[dessert] || 0);
    callback(total);
  }, 500);
}

// — usage —
console.log("Ordering: pizza and cheesecake…");

getFood("pizza", (food) => {
  if (food !== "pizza") { 
    console.log(`Wrong main: ${food}`); return; 
  }
  console.log(`Main OK: ${food}`);

  orderDessert("cheesecake", (dessert) => {
    if (dessert !== "cheesecake") { 
      console.log(`Wrong dessert: ${dessert}`); return; 
    }
    console.log(`Dessert OK: ${dessert}`);

    generateBill(food, dessert, (total) => {
      console.log(`Bill: ₹${total}`);
      // imagine more steps... loyalty points → SMS → print receipt
    });
  });
});

console.log("Meditating...");
console.log("Exercising...");
console.log("Doing other work as we wait for food/dessert to come...");


/* 
    This shape is Callback Hell: 
    deep indentation, repeated checks, and it’s painful to add/remove steps. 
    Error handling spreads across levels.
*/

/* 
What is happening now is - 
1. Function tells, tell me what to do "after" I finish my own task, and I'll do it then.
2. We ask the function to do our work 


Think of opposites - ????
*/


