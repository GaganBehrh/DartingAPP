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

let plybtn1 = document.getElementById("buttonply1");
let plybtn2 = document.getElementById("buttonply1");
plybtn1.addEventListener("click", playeronescorecalc());

//plybtn2.addEventListener("click", playertwoscorecalc());
