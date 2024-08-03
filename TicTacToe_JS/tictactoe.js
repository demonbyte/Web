let boxes = document.querySelectorAll('.box');

let playerX = true; // playerX's turn. playerO is false
const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let count=0;
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let announce = document.querySelector("#announceWinner");

boxes.forEach(box => {
let boxevent = box.addEventListener("click", () => {
    count++;
console.log("box clicked");

if(playerX){
    box.innerText = "X";
    playerX = false;
}
else{
    box.innerText = "O";
    playerX = true;
}
box.disabled = true;
checkWinner();
});
});


function resetGame(){
    playerX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    boxes.forEach( box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const disableBoxes = () => {
    boxes.forEach( box => {
        box.disabled = true;
    });
}

newbtn.addEventListener("click", resetGame);

const showWinner = (winner) => {
    if(count === 9){
        announce.innerText = "It's a Draw!";
    }
    else{
    announce.innerText = "Congratulations! " + winner + " is the winner!";}
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}


const checkWinner = () =>{
    winningPatterns.forEach( pattern => {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
        if(box1 != "" && box1 === box2 && box2 === box3){
          if(box1 === box2 && box2 === box3){
           showWinner(box1);
           
          }
        }
    });
}



reset.addEventListener("click", () => {
console.log("reset clicked");  
resetGame();  
});
