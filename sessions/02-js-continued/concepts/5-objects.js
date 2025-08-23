/* --------------------------------------------------
   OBJECTS: Properties, Nested, Loops, Lodash
-------------------------------------------------- */

const _ = require('lodash');

const person1 = {
  name: 'Asha',
  age: 25,
};

// Access nested fields
console.log('Name:', person1.name);
const person2 = {
  name: 'Asha',
  age: 25,
  hobbies: ['reading', 'coding'],
};

console.log('Name:', person1.hobbies);

const person = {
  name: 'Asha',
  age: 25,
  address: {
    city: 'Bangalore',
    pincode: 560001,
  },
  hobbies: ['reading', 'coding'],
};

// Access nested fields
console.log('City:', person.address.city, person["address"]["city"]);
console.log('First hobby:', person.hobbies[0]);

// Add a new property
person.isStudent = true;
console.log(person);
person["isStudet"] = false; // another way to add

// Loop through keys
for (let key in person) {
  console.log(`${key} → ${person[key]}`);
}

// Get keys and values
const keys = Object.keys(person);
const values = Object.values(person);
console.log('Keys:', keys);
console.log('Values:', values);

// Lodash: get nested safely
console.log('Lodash get pincode:', _.get(person, 'address.pincode', 'N/A'));

// iterating key, value pairs (understand destructuring before this)
for (const [key, value] of Object.entries(person)) {
  console.log(`${key} → ${value}`);
}
