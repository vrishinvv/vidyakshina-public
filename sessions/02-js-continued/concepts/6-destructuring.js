/* --------------------------------------------------
   Destructuring
-------------------------------------------------- */
const person = {
  name: 'Asha',
  age: 25,
  address: {
    city: 'Bangalore',
    pincode: 560001,
  },
  hobbies: ['reading', 'coding'],
};

// destructuring - object
const {
  name,
  age,
  address: { city },
  hobbies,
} = person;
console.log('Name:', name);
console.log('Age:', age);
console.log('City:', city);
console.log('Hobbies:', hobbies.join(', '));

// ... notation on objcet
const additionalInfo = {
  ...person,
  country: 'India',
};
console.log('Additional Info:', additionalInfo);

// destructuring - array
const [first, second, ...rest] = nums;
console.log('First:', first);
console.log('Second:', second);
console.log('Rest:', rest);

// ... notation on array
const additionalNumbers = [...nums, 50, 60];
console.log('Additional Numbers:', additionalNumbers);
