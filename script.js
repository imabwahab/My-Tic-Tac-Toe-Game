
let ting = new Audio("ting.mp3");
let music = new Audio("music2.mp3");
let gameover = new Audio("winner.mp3")

let isgameover = false

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

// Play background music at the start
music.loop = true; // Ensure music plays in a loop
//music.play();

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    // all the winning combinations
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    // implementation of the winning logic
    wins.forEach(e => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {
            // Set winning message
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";

            // Stop background music and play gameover music
            music.pause();
            music.currentTime = 0; // Reset background music
            gameover.play();

            // Update isgameover flag
            isgameover = true;

            // Run this line only when isgameover is true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }
    });
};



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e => {
    let boxtext = e.querySelector('.boxtext');
    e.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })

})

reset.addEventListener('click', ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(e => {
        e.innerText = ""
    })
    // Run this line only when isgameover is true
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    isgameover = false
    turn = "X"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})