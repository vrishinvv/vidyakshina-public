/* --------------------------------------------------
   CALLBACK FUNCTIONS
--------------------------------------------------
   • A callback is a function passed as an argument to another function
   • Useful for async or deferred logic
-------------------------------------------------- */

// setTimeout example
function example() {
  console.log('⏳ Attempting to Wait for 2 seconds...');
  setTimeout(() => {
    // callback
    console.log('✅ Done waiting!');
  }, 2000); // Wait for 2 seconds
  
  console.log('This runs immediately after setTimeout is called'); // javaScript does not wait for the timeout, that is why the first parameter to setTimeout is called a "callback" function
}

example();

function fetchData(functionToRun) {
  console.log('📡 Fetching data...');
  setTimeout(() => {
    const data = { id: 1, name: 'Asha' };
    console.log('✅ Data fetched');
    functionToRun(data); // run the functionToRun after data "arrives"
  }, 1000);
}

function printUser(user) {
  console.log('🙌 User received in callback:', user);
}

fetchData(printUser);
