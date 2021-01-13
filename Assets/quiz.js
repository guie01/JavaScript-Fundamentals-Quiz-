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

var questionsArray = [
    {
        question: "Who invented JavaScript?",
        choiceA: "Brendan Eich",
        choiceB: "Michael Jackson",
        choiceC: "Brendan Schawb",
        choiceD: "Lionel Messi",
        answer: 1;
    }
    {
        question: "What is JavaScript",
        choiceA: "A button on the keyboard",
        choiceB: "Germany's national language",
        choiceC: "A tool used to play a sport",
        choiceD: "A programming language",
        answer: 4
    }
    {
        question: "What is the HTML tag used to link your JavaScript code";
        choiceA: "<js>",
        choiceB: "<h1>",
        choiceC: "<script>",
        choiceD: "<meta>",
        answer: 2
    }
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?";
        choiceA: "local variable",
        choiceB: "global variable",
        choiceC: "All of the above",
        choiceD: "None of the above",
        answer: 2,
    }
]

var scorePoints = 100;
var amountOfQuestions = 4;

startQuiz = function(){
   score = 0;
   questionCounter = 0;
   availableQuestions = [...questionsArray];
   getNewQuestion();
}

getNewQuestion = function(){
    if(availableQuestions.lenght === 0 || questionCounter > amountOfQuestions){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign("/end.html")
    }
    questionCounter++;
    var questionIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
    
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

}

choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if(classToApply === 'correct'){
           incrementScore(scorePoints); 
        }
        selectedChoice.parentElelement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElelement.classList.remove(classToApply);
            getNewQuestion()
        }), 10
    })
})