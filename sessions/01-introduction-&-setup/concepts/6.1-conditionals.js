/* --------------------------------------------------
   CONDITIONAL STATEMENTS
-------------------------------------------------- */

const age = 20;

if (age >= 18) {
  console.log('✅ You can vote!');
} else {
  console.log('❌ Sorry, you are too young.');
}

// Nested if
const score = 90;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 75) {
  console.log('Grade: B');
} else {
  console.log('Grade: C or below');
}

if(score>= 90)
  console.log('Grade: A');
if(score >= 75)
{
  console.log('Grade: B');
  console.log('You did well!');
}
else if(score < 75)
  console.log('Grade: C or below');
