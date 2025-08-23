/* --------------------------------------------------
   JSON: Stringify and Parse
-------------------------------------------------- */

const book = {
  title: 'Learning JS',
  author: 'Sai',
  pages: 250,
  available: true,
};

// Stringify
const jsonStr = JSON.stringify(book);
console.log('JSON String:', jsonStr);

// Parse back
const parsedBook = JSON.parse(jsonStr);
console.log('Parsed Object:', parsedBook);
