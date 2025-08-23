/* --------------------------------------------------
   TRY / CATCH ERROR HANDLING
   --------------------------------------------------
   Key points:
   • Errors thrown inside nested functions "bubble up" to the nearest try/catch
   • The catch block catches it anywhere in that chain
   • finally always runs (cleanup, logging, etc.)
-------------------------------------------------- */

// Deepest function — directly throws an error
function stepThree() {
  console.log('➡️  stepThree started');
  throw new Error('⚡ Something went wrong in stepThree!');
}

// Middle function — calls stepThree
function stepTwo() {
  console.log('➡️  stepTwo started');
  stepThree(); // if this throws, stepTwo does NOT continue
  console.log('✅ stepTwo completed'); // this won't run if stepThree throws
}

// Top-level function — calls stepTwo
function stepOne() {
  console.log('➡️  stepOne started');
  stepTwo();
  console.log('✅ stepOne completed'); // this won't run if stepTwo throws
}

// Wrap entire chain in try/catch
try {
  console.log('🚀 Starting main process');
  stepOne();
  console.log('✅ Main process completed successfully');
} catch (err) {
  console.log('❌ Error caught in main:', err.message);
} finally {
  console.log('✨ Finally block: cleanup actions always run');
}

/* 
Expected output:

🚀 Starting main process
➡️  stepOne started
➡️  stepTwo started
➡️  stepThree started
❌ Error caught in main: ⚡ Something went wrong in stepThree!
✨ Finally block: cleanup actions always run

• Notice how "✅ stepTwo completed" and "✅ stepOne completed" never print — 
  they are skipped as soon as an error is thrown.
• Only the outermost catch block runs.
*/
