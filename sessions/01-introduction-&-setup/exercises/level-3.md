# Level 3 Exercises - Advanced Challenges

## 🎮 Exercise 1: Building an Advanced Game System

### Task 1.1: Character Creation
Create a game character system:
- playerName = from CLI or "Hero"
- baseHealth = 100
- baseAttack = "15" (string from input)
- baseDefense = "10" (string from input)
- level = 1

Convert strings and calculate:
- actualHealth = baseHealth + (level * 20)
- actualAttack = Number(baseAttack) + (level * 5)
- actualDefense = Number(baseDefense) + (level * 3)

### Task 1.2: Combat System
Simulate a battle:
- enemyHealth = 80
- enemyAttack = 18
- enemyDefense = 8
- Calculate damage: (actualAttack - enemyDefense) * (1 + Math.random() * 0.2)
- Check critical hit: if Math.random() > 0.8, damage * 2
- Determine if player can defeat enemy in one hit

### Task 1.3: Experience and Leveling
Add progression system:
- currentExp = 450
- expToNextLevel = level * 1000
- expFromBattle = enemyHealth * 10
- Check if player levels up after battle
- If leveling up, recalculate all stats
- Handle multiple level ups if exp is high enough

### Task 1.4: Character Sheet
Create a detailed character display:
```
╔══════════════════════════════╗
║     CHARACTER SHEET          ║
╠══════════════════════════════╣
║ Name: Hero          Level: 2 ║
║ HP: 140/140        Class: Warrior ║
║                              ║
║ STATS                        ║
║ Attack:  25 (+5)             ║
║ Defense: 16 (+3)             ║
║                              ║
║ EXPERIENCE                   ║
║ Current: 450/2000            ║
║ Progress: ████████░░ 45%     ║
║                              ║
║ Battle Power: 410            ║
╚══════════════════════════════╝
```
