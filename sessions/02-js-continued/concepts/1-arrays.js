/* --------------------------------------------------
   ARRAYS: Common methods & lodash intro
-------------------------------------------------- */

const _ = require('lodash');

const nums = [10, 20, 30, 40];

//0-indexed 
console.log('first element', nums[0]);
console.log('last element', nums[3], "or also the same as: ", nums[nums.length - 1]);

// push
nums.push(50);
console.log('After push:', nums);

// map
const squared = nums.map((n) => n * n);
console.log('Squared:', squared);

// filter
const large = nums.filter((n) => n >= 30);
console.log('Filtered >=30:', large);

// Lodash: chunk array
const chunked = _.chunk(nums, 2);
console.log('Chunked (size 2):', chunked);

// Lodash: sum
const sum = _.sum(nums);
console.log('Sum:', sum);

// let-revisit in a bit iterating an array
for (const num of nums) {
  console.log('Number:', num);
}
