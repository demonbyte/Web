let boxes = document.querySelectorAll('.box');

let playerX = true; // playerX's turn. playerO is false
let winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach(box => {
let boxevent = box.addEventListener("click", (e) => {
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
})
});

function resetGame(){
    boxes.forEach( box => {
        box.innerText = "";
        box.disabled = false;
    });
}
let announce = document.querySelecter(#announceWinner);

function checkWinner(){
    winningPatterns.forEach( pattern => {
        if(boxes[pattern[0]].innertext === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText){
          
    });


}

let reset = document.querySelector("#reset");
reset.addEventListener("click", (e) => {
console.log("reset clicked");  
resetGame();  

})