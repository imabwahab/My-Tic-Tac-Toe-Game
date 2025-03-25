console.log('hello world!')

let ting = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3")

// var for deciding the turn
let turn = "X"

// func to play the ting when we click
function playting() {
    ting.play()
}
function playmusic() {
    music.play()
}
function playgameover() {
    gameover.play()
}

// func to change the turn after one turn
function changeTurn() {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e => {
    let boxtext = e.querySelector('.boxtext');
    e.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })

})
