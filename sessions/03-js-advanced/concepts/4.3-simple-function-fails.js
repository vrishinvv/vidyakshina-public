function getFoodSyncFeeling(callback) {

  setTimeout(() => {
    // return "pizza"; 
    callback("pizza");
  }, 800);
}

function fn(food) {
    console.log("I got:", food);
}
getFoodSyncFeeling(fn);
console.log('hello world');

/* 
    Problem is function takes time to complete, but we are asking for result immediately, 
    what should the function suggest be done here?
*/

