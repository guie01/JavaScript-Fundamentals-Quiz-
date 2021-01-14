var question = document.querySelector(".question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var timer = document.querySelector(".timer");
var scoreText = document.querySelector(".score");

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var scorePoints = 10;
var availableQuestions = [];
var questionCounter = 0
var maximumQuestions = 4;
var questions = [
    {
        question: "Who invented JavaScript?",
        choice1: "Brendan Eich",
        choice2: "Michael Jackson",
        choice3: "Brendan Schawb",
        choice4: "Lionel Messi",
        answer: 1
    },
    {
        question: "What is JavaScript?",
        choice1: "A button on the keyboard",
        choice2: "Germany's national language",
        choice3: "A tool used to play a sport",
        choice4: "A programming language",
        answer: 4
    },
    {
        question: "What is the HTML tag used to link your JavaScript code",
        choice1: "<js>",
        choice2: "<h1>",
        choice3: "<script>",
        choice4: "<meta>",
        answer: 3
    },
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        choice1: "local variable",
        choice2: "global variable",
        choice3: "All of the above",
        choice4: "None of the above",
        answer: 2,
    },
]

function startGame(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    console.log(availableQuestions);
};

function getNewQuestion(){
    if(availableQuestions.length === 0 || questionCounter > maximumQuestions){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("/Assets/highscore.html");
    }

    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
        console.log(choice);
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        console.log("user clicked " + e.target);
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number']

        var classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
            classToApply = 'correct'
        };
        if(classToApply === 'correct'){
            incrementScore(scorePoints);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(function(){ 
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();    
        },1000)
        

        console.log(classToApply);
        
    })
})

incrementScore = num => {
   score += num;
   scoreText.innerText = score;
}

startGame();





