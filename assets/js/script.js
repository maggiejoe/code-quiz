// Variables needed outside of a specific function
var timeRemaining = 60;
var startQuiz = document.querySelector(".start-btn");
var countdown = document.querySelector("#countdown");
var askQuestion = document.querySelector(".question");
var choiceEl1 = document.querySelector(".btn-1");
var choiceEl2 = document.querySelector(".btn-2");
var choiceEl3 = document.querySelector(".btn-3");
var choiceEl4 = document.querySelector(".btn-4");


// Quiz Question Variables
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: {
            choice1: "1. string",
            choice2: "2. booleans",
            choice3: "3. alerts",
            choice4: "4. mumbers"
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
        answers: "4. console.log"
    }
];

// Start Quiz
// when the 'start quiz' button is clicked, the following happens
// 1) intro page disappears, 2) timer begins 3) first question with choices is displayed
var currentIndex = 0

// intro page disappears
startQuiz.addEventListener("click", function(){
    document.querySelector(".intro-page").style.display = "none";
    beginTimer();
    
    document.querySelector(".question-container").style.display = "block";
})

// start timer
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
};

// Removing time from timer if question is answered wrong
function verifyAnswer () {
    var correctAnswer = this.textContent
    if (correctAnswer === quizQuestions[currentIndex].answers) {
        timeRemaining;
        document.querySelector("#right").style.display = "block";
    } else {
        timeRemaining -= 10;
        document.querySelector("#wrong").style.display = "block";
    }
}

// Asking questions
function questionCycle () {
    askQuestion.textContent = quizQuestions[currentIndex].question
    document.querySelector(".hide").style.display = "block";
}

// If answer is right or wrong, display response
function showResponse () {

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