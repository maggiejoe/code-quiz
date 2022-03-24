// when 'Start Quiz' button is clicked the following must happen
// 1) the main header turns into the question
var timeRemaining = 60;

// Quiz Questions
var quizQuesitons = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: {
            1: "1. string",
            2: "2. booleans",
            3: "3. alerts",
            4: "4. mumbers"
        },
        answer: "3. alerts"
    },
    {
        question: "The condition of an if/else statement is enclosed with:",
        choices: {
            1: "1. quotes",
            2: "2. curly brackets",
            3: "3. parenthesis",
            4: "4. square brackets"
        },
        answer: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: {
            1: "1. numbers & strings",
            2: "2. other arrays",
            3: "3. booleans",
            4: "4. all of the above"
        },
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed with __________ when being assigned to variables.",
        choices: {
            1: "1. commas",
            2: "2. curly brackets",
            3: "3. quotes",
            4: "4. parenthesis"
        },
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: {
            1: "1. JavaScript",
            2: "2. terminal/bash",
            3: "3. for loops",
            4: "4. console.log"
        },
        answers: "4. console.log"
    }
];

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