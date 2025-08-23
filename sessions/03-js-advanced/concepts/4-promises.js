/* --------------------------------------------------
   PROMISES & .then()
--------------------------------------------------
   • Promise = object representing future completion or failure
   • Use .then() to handle success, .catch() for errors
-------------------------------------------------- */

function fakeApi(success = true) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('🎉 Data loaded!'); // success outcome, captured by "then"
    } else {
      reject(new Error('❌ Failed to load data!')); // error outcome, captured by "catch"
    }
  });
}

const result = fakeApi(true); // Call the fake API
console.log('Promise created:', result);

// Handle the promise using .then() and .catch()
// This is the "then" method that runs when the promise resolves successfully
// and the "catch" method that runs if it fails

// since its a promise it will resolve to one of "then" or "catch" corresponding to the outcome
fakeApi(true)
  .then((msg) => {
    // Success handler
    console.log('✅ Success:', msg);
  })
  .catch((err) => {
    // Error handler
    console.log('❌ Error:', err.message);
  });


  /*
  okay now draft the whole teaching module. i want detailed pointers and detailed code examples

start from sync vs async (how sync is just seuential executinons of tasks in blocking way) 
Then tell how async in js, then show example, by a simple setTimeout 

great, then take example of restautrnat ordering . imsulate order with setTimeout, cos you dont knwo how long it will take, show how simple funciton calling wont work 

then show, how you could solve it by passing call back. then show how adding more things to do wont work easily if all of them also take time and has to happen one after the other. 

then show how call back hell solves it but very bad to read. so now think of opposites, i dont want to give instrcuitons before hand, i want to do it myself

then i need some way it know when the function is done with whatever it was doing. I can poll or I can do a webhooky think, like ask the function to tell me once its done. 


now lets introduce promises. promise is a way the function gives a placeholder ticket of sorts, that is in pending state initially, and it will wake you up once  its done with the result. you then finsih wahtever you were doing, and immeditealy get back to doing what you intended to do with the result. 

*/