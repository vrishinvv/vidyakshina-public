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

async function dine() {
  try {
    const food = await getFoodP("pizza");
    console.log("Main OK:", food);

    const dessert = await orderDessertP("cheesecake");
    console.log("Dessert OK:", dessert);

    const total = await generateBillP(food, dessert);
    console.log(`Bill: ₹${total}`);

  } catch (e) {
    console.log("Complaint:", e.message);
  }

    return 55;
}

(async () => {
    const result = dine();
    // setTimeout(()=>console.log(result),5000);
    console.log("Result of dine:", result);
})();
