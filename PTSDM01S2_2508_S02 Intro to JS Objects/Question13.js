// Title:
// L1 - Student Grades Based on Score

// Problem Statement:

// Write a program that classifies students based on their scores stored in an object. The object contains student names as keys and their scores as values. You need to print each student’s name along with their grade based on the following conditions:

// Score >= 90 → "A"
// Score >= 80 and < 90 → "B"
// Score >= 70 and < 80 → "C"
// Score >= 60 and < 70 → "D"
// Score < 60 → "F"
// You must use a for-in loop to iterate through the object.


function assignGrades(scores){
    for(let i in scores){
        let grade = scores[i]>= 90 ? "A":
        scores[i]>=80 && scores[i]<90? "B":
        scores[i]>=70 && scores[i]<80 ? "C":
        scores[i]>= 60 && scores[i]<70 ? "D":
        scores[i] <60 ? "F": "FF";
        console.log(`${i}: Grade ${grade}`)

    }

}

let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };

  assignGrades(studentScores)