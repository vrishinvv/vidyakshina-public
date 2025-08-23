# Session 2 Exercises - Arrays, Objects, Functions, and More

## 📘 Level 1: Student Test Score Tracker

### Problem Statement
Create a program that helps a teacher track test scores for students. The teacher should be able to:
1. Enter student details
2. Add test scores for different subjects
3. View a summary report

### Input Format
The program should accept input in this order:
```
Enter student name: Priya
Enter student age: 16
Enter number of subjects: 3

Subject 1 name: Math
How many test scores for Math: 3
Enter score 1: 85
Enter score 2: 90
Enter score 3: 78

Subject 2 name: Science
How many test scores for Science: 2
Enter score 1: 92
Enter score 2: 88

Subject 3 name: English
How many test scores for English: 3
Enter score 1: 75
Enter score 2: 82
Enter score 3: 79
```

### Required Data Structure
```javascript
// Your student object should look like this:
const student = {
  name: "Priya",
  age: 16,
  subjects: [
    {
      name: "Math",
      scores: [85, 90, 78],
      average: 84.33
    },
    {
      name: "Science", 
      scores: [92, 88],
      average: 90
    },
    {
      name: "English",
      scores: [75, 82, 79],
      average: 78.67
    }
  ]
};
```

### Expected Output
```
=== STUDENT REPORT ===
Name: Priya
Age: 16

Subject: Math
Scores: 85, 90, 78
Average: 84.33
Grade: B

Subject: Science
Scores: 92, 88
Average: 90.00
Grade: A

Subject: English
Scores: 75, 82, 79
Average: 78.67
Grade: C

Overall Average: 84.33
Status: PASS
```

### Functions to Implement
1. `calculateAverage(scores)` - Takes array of numbers, returns average
2. `getGrade(average)` - Returns A (90+), B (80-89), C (70-79), D (60-69), F (<60)
3. `createSubject(name, scores)` - Returns subject object with name, scores, and average
4. `generateReport(student)` - Prints the formatted report

### Hints
- Use `prompt-sync` for input: `const prompt = require('prompt-sync')();`
- Use `Number()` to convert string inputs to numbers
- Use array `map()` to process scores
- Use `for` loop to iterate through subjects

---

