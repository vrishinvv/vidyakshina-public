
/* 
What is happening now is - 
1. Function tells, tell me what to do "after" I finish my own task, and I'll do it then.
2. We ask the function to do our work 


Think of opposites - 
1. Instead of us telling function what to do, function tell us tell us when you are done.
2. Function does not do our work, we do our own work.

-> how?? poll/wait/subscribe

prommise is the subscription, it tells us when it's done. we literally tell the function to promise that it will tell us when it's done, and it does that.
promises are like a subscription to a future value, they promise to give us the value when it's ready.
*/




function getFoodP(requestedFood) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const prepared = Math.random() < 0.5 ? "pizza" : "dosa";
      prepared === requestedFood
        ? resolve(prepared)
        : reject(new Error(`Wrong main: ${prepared}`));
    }, 700);
  });
}

function orderDessertP(requestedDessert) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const prepared = Math.random() < 0.5 ? "cheesecake" : "fruit-salad";
      prepared === requestedDessert
        ? resolve(prepared)
        : reject(new Error(`Wrong dessert: ${prepared}`));
    }, 600);
  });
}

function generateBillP(mainCourse, dessert) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prices = { pizza: 250, dosa: 120, cheesecake: 180, "fruit-salad": 140 };
      resolve((prices[mainCourse] || 0) + (prices[dessert] || 0));
    }, 500);
  });
}


console.log("Ordering: pizza + cheesecake…");

getFoodP("pizza")
  .then((food) => {
    console.log("Main OK:", food);
    // return another promise so the chain waits
    return orderDessertP("cheesecake").then(dessert => ({ food, dessert }));
  })
  .then(({ food, dessert }) => {
    console.log("Dessert OK:", dessert);
    return generateBillP(food, dessert);
  })
  .then((total) => {
    console.log(`Bill: ₹${total} 💳`);
  })
  .catch((err) => {
    console.log("Complaint:", err.message);
  });
