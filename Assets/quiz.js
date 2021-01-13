var question = document.querySelector("#question");
var choices = array.from(document.querySelectorAll("#.choice-text"));
var timer = document.querySelector("#timer");
var scoreText = document.querySelector("#score");

var cuurentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var scorePoints = 10;
var questionCounter = 0;
var availableQuestions = [];