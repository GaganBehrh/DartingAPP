function playeronescorecalc() {
  let totalscore = 301;
  let currentscore = 0;
  let latestscore = totalscore - currentscore;
  currentscore = latestscore;
  console.log(currentscore);
  let currentscoreElement = document.getElementById("ply1crntscr");
  console.log(currentscoreElement.value);
  let player1 = document.getElementById("player1").value;
  console.log(player1.value);
  currentscoreElement.innerHTML = currentscore;
}

function player1scoreupdater() {
  let score1 = document.getElementById("score1");
  console.log(score1.value);
  let currentscoreElement = document.getElementById("ply1crntscr");
}
let plybtn1 = document.getElementById("buttonply1");
let plybtn2 = document.getElementById("buttonply1");
//plybtn1.addEventListener("click", playeronescorecalc());

let submit1 = document.getElementById("submit1");
submit1.addEventListener("click", player1scoreupdater());
//let submit2 = document.getElementById("submit2");
//submit1.addEventListener("click", player2scoreupdater());

//plybtn2.addEventListener("click", playertwoscorecalc());
