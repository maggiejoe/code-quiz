// GLOBAL VARIABLES
// Variables needed outside of a specific function
var timeRemaining = 60;
var timerInterval;
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
var score;
var newHighScores;
var submit = document.querySelector(".submit-btn");
var inputLine = document.querySelector(".input-line");
var results = document.querySelector("#finalScore");
var highScoreList = document.querySelector(".highScoreList-section");
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

beginQuiz ();

function beginQuiz () {
    // Intro Page Disappears, Timer Begins, Questions Begin
    startQuiz.addEventListener("click", function() {
        currentIndex = 0;
        document.querySelector(".intro-page").style.display = "none";
        beginTimer();
    
        document.querySelector(".question-section").style.display = "block";
        questionCycle();
    })
    };

// Start Timer
function beginTimer () {
    timerInterval = setInterval (function() {
        if (timeRemaining > 0) {
            countdown.textContent = timeRemaining;
            timeRemaining --;
        } else {
            countdown.textContent = score;
            clearInterval(timerInterval);
        }
    }, 1000);
};

// Verifying Answers
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
    } else {
        score = timeRemaining;
        showScore ();
        timeRemaining = 0;
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

function showScore() {
    document.querySelector(".question-section").style.display = "none";
    document.querySelector(".results").style.display = "block";

    results.textContent = score;
    
};

// Generate High Score
function savedScores () {
    // event.preventDefault();
    // display all high scores in order of best to worst

    var name = document.querySelector(".input-line").value;
    var savedHighScores = localStorage.getItem("highScores");
    var scoresArray = [];

    if (savedHighScores === "" || savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        userName: inputLine.value,
        userFinalScore: score
    };
   
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    localStorage.setItem("highScores", scoresArrayString);
    displayHighScores ();
}

function displayHighScores () {
    document.querySelector(".results").style.display = "none";
    document.querySelector(".highScoreList").style.display = "block";
    document.getElementById("highscore-ul").innerHTML = "";
    var localSaveHighScores = JSON.parse(localStorage.getItem("highScores"));
    var saveHighScores = localSaveHighScores.sort(function(a, b){return b.userFinalScore - a.userFinalScore});
    console.log(saveHighScores);
    for (var highScoreIndex = 0; highScoreIndex < saveHighScores.length; highScoreIndex++) {
        newHighScores = document.createElement("li");
        newHighScores.classList.add("li-style");
        newHighScores.innerHTML = saveHighScores[highScoreIndex].userName + ": " + saveHighScores[highScoreIndex].userFinalScore;
        // highScoreList.appendChild(newHighScores);
        document.getElementById("highscore-ul").appendChild(newHighScores);
    } 
    // dedicated container and append 
    // clear "old high scores" before restart button resets quiz
} 

// View High Scores Button
viewHighScore.addEventListener("click", function() {
    // show the high scores list in the highScores ()
    document.querySelector(".intro-page").style.display = "none";
    document.querySelector("#countdown").style.display = "none";
    document.querySelector(".question-section").style.display = "none";
    document.querySelector(".results").style.display = "none";
    displayHighScores();
});

submit.addEventListener("click", function () {
    // save name and score to local storage
    document.querySelector("#wrong").style.display = "none";
    document.querySelector("#right").style.display = "none";

    // localStorage.setItem(name, score);
    if (document.querySelector(".input-line").value.length === 0) {
        window.alert("You must input your name or initials!")
    } else {
    savedScores();
    }
});

// Clear High Scores Button
clearHighScores.addEventListener("click", function() {
    localStorage.clear("highScores");
    newHighScores.style.display = "none";
});

// Restart Game Button
restartQuiz.addEventListener("click", function () {
    document.querySelector(".intro-page").style.display = "block";
    document.querySelector(".results").style.display = "none";
    document.querySelector(".highScoreList").style.display = "none";
    countdown.textContent = timeRemaining;
    clearInterval(timerInterval);
    timeRemaining = 60;
    beginQuiz ();
});