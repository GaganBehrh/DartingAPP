function playeronescorecalc() {
  let totalscore = 31;
  let currentscore = 0;
  let latestscore = totalscore - currentscore;
  currentscore = latestscore;
  console.log(currentscore);
  let currentscoreElement = document.getElementById("ply1crntscr");
  currentscoreElement.innerHTML = currentscore;
}

let plybtn1 = document.getElementById("buttonply1");
let plybtn2 = document.getElementById("buttonply1");
plybtn1.addEventListener("click", playeronescorecalc());
//plybtn2.addEventListener("click", playertwoscorecalc());
