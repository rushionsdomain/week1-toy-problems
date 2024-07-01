const prompt = require("prompt-sync")();
// This function is used to generate grade based on Marks input by the user
function generateGrade() {
  // Prompts the user to enter marks
  let marks = prompt("Key in marks (0-100): ");

  // Converts input to a number
  marks = Number(marks);

  let grade;

  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Output
  console.log(`The grade is: ${grade}`);
}

// Calls the function
generateGrade();
