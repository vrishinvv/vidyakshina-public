/* 
Problem is function takes time to complete, but we are asking for result immediately, 
what should the function suggest be done here? -> tell me what to do when I'm done, and ill do it then.
This is the essence of callbacks.
*/


function getFood(requestedFood, callback) {
  setTimeout(() => {
    const foods = ["pizza", "dosa"];
    const prepared = foods[Math.floor(Math.random() * foods.length)];
    callback(prepared);
  }, 700);
}

function getDessert(requestedFood, callback) {
  setTimeout(() => {
    const foods = ["cake", "icecream"];
    const prepared = foods[Math.floor(Math.random() * foods.length)];
    callback(prepared);
  }, 1400);
}


console.log("Ordering: pizza");
getFood("pizza", (prepared) => {
  if (prepared === "pizza") {
    console.log("Main:", prepared, "→ delicious 😋");
    getDessert('cake', () => {
        if (prepared === 'cake') {
            console.log('Dessert ordered -> correct order');
        }
        else {
            console.log('Dessert ordered -> wrong order');
        }
    });
  } else {
    console.log("Main:", prepared, "→ wrong order 😤");
  }
});

console.log("Meditating...");
console.log("Exercising...");
console.log("Doing other work as we wait for food to come...");

/* what if I wanted to order dessert too, only after I eat pizza?? */
