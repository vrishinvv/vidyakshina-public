/* =================================================
   LEVEL 1: Student Test Score Tracker
   ================================================= */

const prompt = require('prompt-sync')();

// Function to calculate average of scores
function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return scores.length > 0 ? sum / scores.length : 0;
}

// Function to get grade based on average
function getGrade(average) {
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'F';
}

// Function to create a subject object
function createSubject(name, scores) {
  const average = calculateAverage(scores);
  
  return {
    name: name,
    scores: scores,
    average: average
  };
}

// Function to generate and print report
function generateReport(student) {
  console.log("\n=== STUDENT REPORT ===");
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log("");
  
  let totalAverage = 0;
  
  // Loop through each subject
  for (let i = 0; i < student.subjects.length; i++) {
    const subject = student.subjects[i];
    const grade = getGrade(subject.average);
    
    console.log(`Subject: ${subject.name}`);
    console.log(`Scores: ${subject.scores.join(", ")}`);
    console.log(`Average: ${subject.average.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
    console.log("");
    
    totalAverage += subject.average;
  }
  
  // Calculate overall average
  const overallAverage = totalAverage / student.subjects.length;
  const status = overallAverage >= 60 ? "PASS" : "FAIL";
  
  console.log(`Overall Average: ${overallAverage.toFixed(2)}`);
  console.log(`Status: ${status}`);
}

// Main program
function main() {
  console.log("=== Student Test Score Tracker ===\n");
  
  // Get student details
  const studentName = prompt("Enter student name: ");
  const studentAge = Number(prompt("Enter student age: "));
  const numSubjects = Number(prompt("Enter number of subjects: "));
  
  // Create student object
  const student = {
    name: studentName,
    age: studentAge,
    subjects: []
  };
  
  // Get details for each subject
  for (let i = 0; i < numSubjects; i++) {
    console.log(`\nSubject ${i + 1} name: `);
    const subjectName = prompt("");
    
    const numScores = Number(prompt(`How many test scores for ${subjectName}: `));
    
    // Get all scores for this subject
    const scores = [];
    for (let j = 0; j < numScores; j++) {
      const score = Number(prompt(`Enter score ${j + 1}: `));
      scores.push(score);
    }
    
    // Create subject and add to student
    const subject = createSubject(subjectName, scores);
    student.subjects.push(subject);
  }
  
  // Generate the report
  generateReport(student);
  
  // Show the data structure
  console.log("\n=== Student Data Structure ===");
  console.log(JSON.stringify(student, null, 2));
}

// Run the program
main();