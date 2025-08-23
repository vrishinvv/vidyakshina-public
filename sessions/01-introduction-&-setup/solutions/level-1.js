/* =================================================
   LEVEL 1 SOLUTIONS - FOUNDATIONS
   ================================================= */

// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// ===== Exercise 1: Building a Personal Profile =====

// Task 1.1: Create Your Basic Info
console.log("Let's create your personal profile!");
console.log("================================\n");

const name = prompt("What's your name? ");  // Won't change during program
let age = parseInt(prompt("What's your age? "));          // Might change
let city = prompt("Which city are you from? ");  // Might change

console.log("\nName:", name);
console.log("Age:", age);
console.log("City:", city);

// Task 1.2: Add More Details
const favoriteNumber = parseInt(prompt("\nWhat's your favorite number? "));
const isStudentInput = prompt("Are you a student? (yes/no): ").toLowerCase();
const isStudent = isStudentInput === 'yes' || isStudentInput === 'y';
const hobby = prompt("What's your favorite hobby? ");

console.log("\n--- Full Profile ---");
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Favorite Number:", favoriteNumber);
console.log("Is Student:", isStudent);
console.log("Hobby:", hobby);

// Task 1.3: Calculate Your Stats
const ageInMonths = age * 12;
const ageInDays = age * 365;
const luckyNumber = age + favoriteNumber;

console.log("\n--- Calculated Stats ---");
console.log("Age in months:", ageInMonths);
console.log("Age in days:", ageInDays);
console.log("Lucky number:", luckyNumber);

// Task 1.4: Create a Formatted Introduction
// Old way with concatenation
const oldIntro = "Hi, I'm " + name + " from " + city + ". I'm " + age + " years old and I love " + hobby + "!";
console.log("\nOld style:", oldIntro);

// New way with template literals
const newIntro = `Hi, I'm ${name} from ${city}. I'm ${age} years old and I love ${hobby}!`;
console.log("New style:", newIntro);