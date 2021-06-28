var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('highscore');
var finalScore = document.getElementById("savescore");
var mostRecentScore = localStorage.getItem('mostRecentScore');
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];


finalScore.innerHTML = mostRecentScore;

console.log(mostRecentScore);

username.addEventListener('keyup', function(){
    console.log(username.value)
})


saveHighScore = e => {
   e.preventDefault();
   console.log("Clicked Save!");

   const score = {
       score: mostRecentScore,
       name: username.value
   };

   highScores.push(score);
   highScores.sort((a,b) => b.score - a.score);
   highScores.splice(5);

   localStorage.setItem('highscores', JSON.stringify(highScores));

   console.log(highScores);

}


const highScoresList = document.getElementById("highScoresList");


highScoresList.innerHTML = highScores
.map(score => {
return `<p class="high-score">${score.name} - ${score.score}</p>`;
})
.join("");