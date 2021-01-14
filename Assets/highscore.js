var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('highscore');
var finalScore = document.getElementById("savescore");
var mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', function(){
    console.log(username.value)
})

saveHighScore = e => {
   e.preventDefault(); 
}