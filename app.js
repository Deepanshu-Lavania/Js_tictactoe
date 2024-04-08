const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector('.msg-container')
const msg = document.querySelector("#msg");

console.log(boxes);
console.log(resetBtn);

let turnO = true //palyerX, playerO
const Winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame=()=>{
    trueO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); 
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log('btn clicked');
        if (turnO) {
            box.innerHTML = 'X';
            turnO = false;
        } else {
            box.innerHTML = 'O';
            turnO = true;
        }
        box.disabled = true;
        // It seems like you're trying to disable the boxes after they've been clicked once. The reason why box.disabled = true isn't working is that the disabled property is typically used with form elements like buttons and input fields, not with regular HTML elements like divs.
        checkWinner();
    })
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner =(winner)=>{
     msg.innerText = `Congratulation, Winner is ${winner}`;
     msgContainer.classList.remove('hide');
     disableBoxes();
}


const checkWinner = () => {
    for (let pattern of Winpattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        if(pos1Val!= "" && pos2Val != ""  && pos3Val !=""){
             if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log('winner',pos1Val);
                showWinner(pos1Val);
             }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
