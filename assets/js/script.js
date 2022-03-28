// Variables needed outside of a specific function
var timeRemaining = 60;
var startQuiz = document.querySelector(".start-btn");
var countdown = document.querySelector("#countdown");

// Quiz Variables
var askQuestion = document.querySelector(".question");
var choiceEl1 = document.querySelector(".btn-1");
var choiceEl2 = document.querySelector(".btn-2");
var choiceEl3 = document.querySelector(".btn-3");
var choiceEl4 = document.querySelector(".btn-4");

// Event Listeners for Choice Buttons
choiceEl1.addEventListener("click", verifyAnswer);
choiceEl2.addEventListener("click", verifyAnswer);
choiceEl3.addEventListener("click", verifyAnswer);
choiceEl4.addEventListener("click", verifyAnswer);

// Results & High Score Variables
var score = timeRemaining
var submit = document.querySelector(".submit-btn");
var inputLine = document.querySelector(".input-line");
var showResults = document.querySelector(".show-results");
var clearHighScores = document.querySelector(".clearHighScore");
var restartQuiz = document.querySelector(".restartQuiz");
var viewHighScore = document.querySelector("#highScore");
var input = document.querySelector(".input-line");


// Quiz Question Variables
var quizQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: {
            choice1: "1. string",
            choice2: "2. booleans",
            choice3: "3. alerts",
            choice4: "4. numbers"
        },
        answer: "3. alerts"
    },
    {
        question: "The condition of an if/else statement is enclosed with:",
        choices: {
            choice1: "1. quotes",
            choice2: "2. curly brackets",
            choice3: "3. parenthesis",
            choice4: "4. square brackets"
        },
        answer: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: {
            choice1: "1. numbers & strings",
            choice2: "2. other arrays",
            choice3: "3. booleans",
            choice4: "4. all of the above"
        },
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed with __________ when being assigned to variables.",
        choices: {
            choice1: "1. commas",
            choice2: "2. curly brackets",
            choice3: "3. quotes",
            choice4: "4. parenthesis"
        },
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: {
            choice1: "1. JavaScript",
            choice2: "2. terminal/bash",
            choice3: "3. for loops",
            choice4: "4. console.log"
        },
        answer: "4. console.log"
    }
];

// Start Quiz
var currentIndex = 0

// Intro Page Disappears, Timer Begins, Questions Begin
startQuiz.addEventListener("click", function(){
    document.querySelector(".intro-page").style.display = "none";
    beginTimer();
    
    document.querySelector(".question-container").style.display = "block";
    questionCycle();
})

// Start Timer
function beginTimer () {
    
    var timerInterval = setInterval (function() {
        if (timeRemaining > 0) {
            countdown.textContent = timeRemaining;
            timeRemaining --;
        } else {
            countdown.textContent = "0";
            clearInterval(timerInterval);
        }
    }, 1000); 
    // if timer his 0 then stop asking the qestions and go to the try again or view high score page
};

// Verifying Answers
// Removing time from timer if question is answered wrong
// Letting the user know if they answered right or wrong
function verifyAnswer () {
    var correctAnswer = this.textContent
    if (correctAnswer === quizQuestions[currentIndex].answer) {
        document.querySelector("#right").style.display = "block";
        document.querySelector("#wrong").style.display = "none";
    } else {
        timeRemaining -= 10;
        document.querySelector("#wrong").style.display = "block";
        document.querySelector("#right").style.display = "none";
    }
    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        questionCycle ();
    }  
}

// Asking questions
function questionCycle () {
    askQuestion.textContent = quizQuestions[currentIndex].question
    choiceEl1.textContent = quizQuestions[currentIndex].choices.choice1
    choiceEl2.textContent = quizQuestions[currentIndex].choices.choice2
    choiceEl3.textContent = quizQuestions[currentIndex].choices.choice3
    choiceEl4.textContent = quizQuestions[currentIndex].choices.choice4
};

// Generate High Score
function highScores () {
    var name = inputLine;
    // show users score
    showResults.textContent = score;
    submit.addEventListener("click", function () {
        if (inputLine.length > 0) {
            // save name and score to local storage
            localStorage.setItem(name, score);
        }
        // display all high scores in order of best to worst
    })
}

function showScore() {
    document.querySelector(".results-container").style.display = "block";
    showResults.textContent = timeRemaining;
    highScores ();
}

// View High Scores Button
viewHighScore.addEventListener("click", function() {
    // show only the high scores list in the highScores ()
});

// Clear High Scores Button
clearHighScores.addEventListener("click", function() {
    localStorage.clear();
});

// Restart Game Button
restartQuiz.addEventListener("click", function() {
    startQuiz ();
});