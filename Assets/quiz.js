var question = document.querySelector("#question");
var choices = array.from(document.querySelectorAll("#.choice-text"));
var question = document.querySelector("#timer");

var cuurentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questionsArray = [
    {
        question: "Who invented JavaScript?";
        choiceA: "Brendan Eich";
        choiceB: "Michael Jackson";
        choiceC: "Brendan Schawb";
        choiceD: "Lionel Messi";
        answer: 1;
    }
    {
        question: "What is JavaScript";
        choiceA: "A button on the keyboard";
        choiceB: "Germany's national language";
        choiceC: "A tool used to play a sport";
        choiceD: "A programming language";
        answer: 4;
    }
    {
        question: "What is the HTML tag used to link your JavaScript code";
        choiceA: "<js>;
        choiceB: "<h1>";
        choiceC: "<script>";
        choiceD: "<meta>";
        answer: 2;
    }
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?";
        choiceA: "local variable";
        choiceB: "global variable";
        choiceC: "All of the above";
        choiceD: "None of the above";
        answer: 1;
    }
]