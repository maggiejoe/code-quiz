// Variables needed outside of a specific function
var timeRemaining = 60;
var timerInterval;
var startQuiz = document.querySelector(".start-btn");
var startTimer = document.querySelector(".timer");
var countdown = document.querySelector("#countdown");
var hideContent = document.querySelector("hide");


// Quiz Question Variables
var quizQuestion1 = "Commony used data types do NOT include:";
var quizQuestion2 = "The condition in an if/else statment is enclosed in:";
var quizQuesiton3 = "Arrays in JavaScript can be used to store:";
var quizQuestion4 = "String values must be enclosed within __________ when being assigned to variables.";
var quizQuestion5 = "A very useful tool used during development and debugging for printing content to the debugger is:";
var quizQuestionsArray = [quizQuestion1, quizQuestion2, quizQuesiton3, quizQuestion4, quizQuestion5]

var questionContainer = document.querySelector(".question.container");

// Quiz Choice Variables
var quizChoices1 = {
    choice1: "Booleans",
    choice2: "Alerts",
    choice3: "Strings",
    choice4: "Numbers"
}

var quizChoices2 = {
    choice1: "Parenthesis",
    choice2: "Quotes",
    choice3: "Curly Brackets",
    choice4: "Square Brackets"
}

var quizChoices3 = {
    choice1: "Other Arrays",
    choice2: "Numbers & Strings",
    choice3: "Booleans",
    choice4: "All of the Above"
}

var quizChoices4 = {
    choice1: "Parenthesis",
    choice2: "Quotes",
    choice3: "Curly Brackets",
    choice4: "Commas"
}

var quizChoices5 = {
    choice1: "Terminal/Bash",
    choice2: "JavaScript",
    choice3: "for Loops",
    choice4: "console.log"
}

var quizChoiceArray = [quizChoices1, quizChoices2, quizChoices3, quizChoices4, quizChoices5];

// Choice Variables tied to classes in HTML
var choice1 = document.querySelector(".btn-1");
var choice2 = document.querySelector(".btn-2");
var choice3 = document.querySelector(".btn-3");
var choice4 = document.querySelector(".btn-4");

// Quiz Answer Variables
var correctAnswer1 = quizChoices1.choice2;
var correctAnswer2 = quizChoices2.choice1;
var correctAnswer3 = quizChoices3.choice4;
var correctAnswer4 = quizChoices4.choice2;
var correctAnswer5 = quizChoices5.choice4;
var correctAnswersArray = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];

// Start Quiz
// when the 'start quiz' button is clicked, the following happens
// 1) intro page disappears, 2) timer begins 3) first question with choices is displayed

// intro page disappears
startQuiz.addEventListener("click", function(){
    document.querySelector(".main-page").style.display = "none";
})

// start timer
startQuiz.addEventListener("click", startTimer);

function startTimer () {
    timerInterval = setInterval (function() {
        if (timer > 0) {
            countdown.textContent = timeRemaining;
        } else {
            countdown.textContent = "0";
            // Still need to create and endQuiz function
            // endQuiz;
        }
    });
};

// first question begins
var generateQuestion = function () {
    hide.style.display = "none";

}


// Subtracting time from timer when incorrect answer is selected

// when 'Start Quiz' button is clicked the following must happen
// 1) the main header turns into the question
// 2) the intro disappears
// 3) the hidding buttons display with the 4 possible answers
// 4) the countdown begins






// ^^ repeats until all questions are gone through
// ^^ if a question is answered wrong 10 seconds comes off the timer
// ^^ when the user selects and answer, 'correct' or 'wrong' is displayed at the bottom of the possible answers

// onces all questions are completed
// 1) high score is displayed (time remaining)
// 2) and input line is displayed for the user to put their name/initials

// when submit button is clicked
// 1) high score is saved in localStorage
// 2) two buttons appear
// 2-a) restart - bring back to beginning to start quiz again
// 2-b) clear high score - removes high score from localStorage
// 3) high score is displayed on page in order of highest to lowest (top to bottom)