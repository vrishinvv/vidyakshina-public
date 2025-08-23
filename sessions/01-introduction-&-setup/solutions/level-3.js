/* =================================================
   LEVEL 3 SOLUTIONS - ADVANCED CHALLENGES
   ================================================= */

// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// ===== Exercise 1: Building an Advanced Game System =====

console.log("Welcome to the Advanced Game System!");
console.log("====================================\n");

// Task 1.1: Character Creation
const playerName = prompt("Enter your character name: ") || "Hero";
const baseHealth = 100;
const baseAttack = prompt("Enter base attack value: ");  // String from input
const baseDefense = prompt("Enter base defense value: "); // String from input
let level = parseInt(prompt("Enter starting level: ")) || 1;

// Convert strings and calculate actual stats
const actualHealth = baseHealth + (level * 20);
const actualAttack = Number(baseAttack) + (level * 5);
const actualDefense = Number(baseDefense) + (level * 3);

console.log("\n=== Character Creation ===");
console.log(`Name: ${playerName}`);
console.log(`Level: ${level}`);
console.log(`Health: ${actualHealth}`);
console.log(`Attack: ${actualAttack} (base: ${baseAttack})`);
console.log(`Defense: ${actualDefense} (base: ${baseDefense})`);

// Task 1.2: Combat System
console.log("\n--- Enemy Configuration ---");
const enemyHealth = parseInt(prompt("Enter enemy health: ")) || 80;
const enemyAttack = parseInt(prompt("Enter enemy attack: ")) || 18;
const enemyDefense = parseInt(prompt("Enter enemy defense: ")) || 8;

// Calculate damage with variance
const randomFactor = 0.8 + (Math.random() * 0.4);  // 0.8 to 1.2
let damage = Math.floor((actualAttack - enemyDefense) * randomFactor);

// Check critical hit
const criticalRoll = Math.random();
const isCritical = criticalRoll > 0.8;
if (isCritical) {
    damage *= 2;
}

const canDefeatInOneHit = damage >= enemyHealth;

console.log("\n--- Battle Simulation ---");
console.log(`Enemy: Health ${enemyHealth}, Attack ${enemyAttack}, Defense ${enemyDefense}`);
console.log(`Your attack roll: ${randomFactor.toFixed(2)}`);
console.log(`Damage dealt: ${damage}${isCritical ? " CRITICAL!" : ""}`);
console.log(`Can defeat in one hit: ${canDefeatInOneHit}`);

// Task 1.3: Experience and Leveling
let currentExp = parseInt(prompt("\nEnter current experience points: ")) || 450;
const expToNextLevel = level * 1000;
const expFromBattle = enemyHealth * 10;
const totalExp = currentExp + expFromBattle;

console.log("\n--- Experience System ---");
console.log(`Current EXP: ${currentExp}/${expToNextLevel}`);
console.log(`EXP from battle: +${expFromBattle}`);
console.log(`Total EXP: ${totalExp}`);

// Check level up
let levelsGained = 0;
let tempExp = totalExp;
let tempLevel = level;
let tempExpNeeded = expToNextLevel;

while (tempExp >= tempExpNeeded) {
    levelsGained++;
    tempExp -= tempExpNeeded;
    tempLevel++;
    tempExpNeeded = tempLevel * 1000;
}

if (levelsGained > 0) {
    console.log(`LEVEL UP! Gained ${levelsGained} level(s)`);
    level += levelsGained;
    currentExp = tempExp;
}

// Recalculate stats after leveling
const newHealth = baseHealth + (level * 20);
const newAttack = Number(baseAttack) + (level * 5);
const newDefense = Number(baseDefense) + (level * 3);

// Task 1.4: Character Sheet
const battlePower = newHealth + (newAttack * 10) + (newDefense * 5);
const expProgress = Math.floor((currentExp / (level * 1000)) * 100);
const progressBar = "█".repeat(Math.floor(expProgress / 10)) + "░".repeat(10 - Math.floor(expProgress / 10));

console.log(`
╔════════════════════════════════════════════╗
║     CHARACTER SHEET                        ║
╠════════════════════════════════════════════╣
║ Name: ${playerName.padEnd(14)}Level: ${level}               ║
║ HP: ${newHealth}/${newHealth}${" ".repeat(8)}Class: Warrior          ║
║                                            ║
║ STATS                                      ║
║ Attack:  ${newAttack} (+${newAttack - Number(baseAttack)})${" ".repeat(13)}             ║
║ Defense: ${newDefense} (+${newDefense - Number(baseDefense)})${" ".repeat(13)}               ║
║                                            ║
║ EXPERIENCE                                 ║
║ Current: ${currentExp}/${level * 1000}${" ".repeat(16 - currentExp.toString().length - (level * 1000).toString().length)}                 ║
║ Progress: ${progressBar} ${expProgress}%                   ║
║                                            ║
║ Battle Power: ${battlePower}${" ".repeat(14 - battlePower.toString().length)}               ║
╚════════════════════════════════════════════╝`);