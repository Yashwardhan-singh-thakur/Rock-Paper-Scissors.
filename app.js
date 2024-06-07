const choice = document.querySelectorAll(".choice");
const h2 = document.querySelector("h2");
const comPoint = document.querySelector(".comp-p");
const userPoint = document.querySelector(".user-p");
const btn = document.querySelector("button");
const abc = document.querySelector(".abc");

let idxC = 0;
let idxY = 0;

// to make user and comp choises
choice.forEach((bt) => {
  bt.addEventListener("click", () => {
    let userChoice = bt.getAttribute("id");
    console.log(`Your Choise = ${userChoice}`);

    const compChoice = genCompChoices();
    console.log(`Comp Choise = ${compChoice}`);
    if (userChoice === compChoice) {
      h2.innerText = `DRAW`;
      h2.style.backgroundColor = "#2d4739";
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        // scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        // rock, scissors
        userWin = compChoice === "scissor" ? false : true;
      } else {
        // rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      if (userWin) {
        console.log("you win");
        h2.innerText = `You win! Your ${userChoice} Beats ${compChoice}`;
        h2.style.backgroundColor = "green";
        idxY++;
      } else {
        console.log("you lose");
        h2.innerText = `You lose! ${compChoice} Beats Your ${userChoice}`;
        h2.style.backgroundColor = "red";
        idxC++;
      }
      userPoint.innerText = `${idxY}`;
      comPoint.innerText = `${idxC}`;
    }
  });
});

// generating computer choice
const genCompChoices = () => {
  let choices = ["rock", "paper", "scissor"];
  let idxRandom = Math.floor(Math.random() * 3);
  return choices[idxRandom];
};

// reset button
btn.addEventListener("click", () => {
  idxY = 0;
  idxC = 0;
  h2.innerText = "let's Start";
  h2.style.backgroundColor = "#2d4739";
  userPoint.innerText = 0;
  comPoint.innerText = 0;
});
