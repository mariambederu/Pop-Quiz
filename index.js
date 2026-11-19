let score = 0;
let correctCount = 0;

// Q1 \n = Enter or Return without it you will need write three separatec console.log for each answer.
    console.log ("Question 1: Which the three countries with the highest elevation cities in the world?");
    console.log("(A) United States\n(B) Mexico\n(C) Peru\n(D) Chile\n(E) Nepal");
    
let answer1 = prompt("Question 1:  Which the three countries with the highest elevation cities in the world?\n(A) United States\n(B) Mexico\n(C) Peru\n(D) Chile\n(E) Nepal");

if (answer1==="CDE" || answer1==="cde"){
    console.log("Correct");
    score = score + 1;
    correctCount++;
} else {console.log ("Wrong! The answer is C, D, and E");
    score--;
}

// Q2 score++; || score = score + 1; Adds 1 to the score next time it runs. 
    console.log ("Question 2: Which are the three largest metropolitan cities in the world?");
    console.log("(A) Tokyo\n(B) Jakarta\n(C) Delhi\n(D) New York\n(E) London");
    
let answer2 = prompt("Question 2: Which are the three largest metropolitan cities in the world\n(A) Tokyo\n(B) Jakarta\n(C) Delhi\n(D) New York\n(E) London");

if (answer2==="ABC" || answer2==="abc"){
    console.log("Correct");
     score = score + 1;
     correctCount++;
} else {console.log ("Wrong! The answer is C, D, and E");
    score--;
}

// Q3 
    console.log ("Question 3: Which three cities are close to active volcanoes?");
    console.log("(A) Arizona, USA\n(B) Naples, Italy\n(C) Goma, D.R. Congo\n(D) Arequipa, Peru\n(E)  Nuuk, Greenland");
    
let answer3 = prompt("Question 3: Which three cities are close to active volcanoes?\n(A) Arizona, USA\n(B) Naples, Italy\n(C) Goma, D.R. Congo\n(D) Arequipa, Peru\n(E)  Nuuk, Greenland");

if (answer3==="BCD" || answer3==="bcd"){
    console.log("Correct");
    score = score + 1;
    correctCount++;
} else {console.log ("Wrong! The answer is C, D, and E");
    score--;
} alert("Quiz Finished!\nYour Final Score is: " + correctCount);