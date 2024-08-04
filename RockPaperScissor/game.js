const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log(userChoice);
        let computerChoice =  genRandomChoice();
        displayResult(userChoice, computerChoice);
    })
})

let genRandomChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randomOption = Math.floor(Math.random() * 3);
    return options[randomOption];
}

const drawGame = () => {
    console.log("It's a Draw! Play Again!");
    msg.innerText = "It's a Draw! Play Again!";
    msg.style.backgroundColor = "#081b31";
    

}

const showResult = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    

}

let displayResult = (userChoice, compChoice) => {


    console.log(`User Choice: ${userChoice}, Comp: ${compChoice}`);
    if(userChoice === compChoice) {  
        drawGame();  }
    else {
        let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper"? false : true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissor"? false : true;
    }
    else {
        userWin = compChoice === "rock"? false : true;
    }
    showResult(userWin, userChoice, compChoice);
}
}

