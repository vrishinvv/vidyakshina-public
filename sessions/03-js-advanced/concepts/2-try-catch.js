/* --------------------------------------------------
   TRY / CATCH in each function
   --------------------------------------------------
   Key points:
   • If each function has its own try/catch,
     every function in the chain can handle and log errors locally.
   • The outer catch still runs if errors are re-thrown.
   • ERROR once thrown, is caught EXACTLY once. You MUST throw again if you want to propagate it.
-------------------------------------------------- */

function stepThree() {
  console.log('➡️ stepThree started');
  try {
    throw new Error('⚡ Error inside stepThree!');
  } catch (err) {
    console.log('❌ stepThree caught:', err.message);
    // You can rethrow to pass to outer catch if needed
    // throw err; // IT IS YOUR DECISION TO RE-THROW
  }
  console.log('✅ stepThree finished');
}

function stepTwo() {
  console.log('➡️ stepTwo started');
  try {
    stepThree();
  } catch (err) {
    console.log('❌ stepTwo caught:', err.message);
  }
  console.log('✅ stepTwo finished');
}

function stepOne() {
  console.log('➡️ stepOne started');
  try {
    stepTwo();
  } catch (err) {
    console.log('❌ stepOne caught:', err.message);
  }
  console.log('✅ stepOne finished');
}

try {
  console.log('🚀 Starting main process');
  stepOne();
  console.log('✅ Main process completed successfully');
} catch (err) {
  console.log('❌ Main catch:', err.message);
} finally {
  console.log('✨ Finally block always runs');
}

/* 
Expected output:

🚀 Starting main process
➡️ stepOne started
➡️ stepTwo started
➡️ stepThree started
❌ stepThree caught: ⚡ Error inside stepThree!
✅ stepThree finished
✅ stepTwo finished
✅ stepOne finished
✅ Main process completed successfully
✨ Finally block always runs

• Notice: Each function logs its own "caught" message and continues!
• If stepThree re-threw the error, it would continue bubbling.
*/
