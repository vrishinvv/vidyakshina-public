/* --------------------------------------------------
   PROMISES & async, await
--------------------------------------------------
   • Promise = object representing future completion or failure
   • Cleaner way to write async code
   • await "pauses" inside an async function
   • Combine with try/catch for errors

-------------------------------------------------- */

function fakeApi(success = true) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('🎉 Data loaded!'); // success outcome
    } else {
      reject(new Error('❌ Failed to load data!')); // error outcome
    }
  });
}

// any code block that calls "await" MUST be inside an "async" function -> RULE
async function loadData() {
  try {
    // "await" MUST be put before a promise in order to RESOLVE it
    const msgPromise = fakeApi(true); // Call the fake API
    console.log('Promise created:', msgPromise);
    // await pauses execution until the promise resolves
    const msg = await fakeApi(true); // code execution pauses until resolved
    console.log('✅ Success (async):', msg);
  } catch (err) {
    console.log('❌ Error (async):', err.message);
  }
}

const result = loadData();
console.log('Function call returned:', result); // this will log a Promise object, not the resolved value
