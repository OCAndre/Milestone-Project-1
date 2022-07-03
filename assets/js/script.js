// get elements
let board = document.querySelector('#board');
const square = document.querySelectorAll('.square');

// Location
// Potential way to track Location: row 1 from left to right is lettered a-h, column 1 from bottom to top is 1-8
// Location is coded as two numbers. (a-h,1-8) where a=1,b=2..., (ex. h3=(8,3)) 
// location matrix set up by a for loop for each row?
// let location = [[81, 82, 83, 84, 85, 86, 87, 88], [71, 72, 73, 74, 75, 76, 77, 78, 79], [61, 62, 63, 64, 65, 66, 67, 68, 69], [51, 52, 53, 54, 55, 56, 57, 58, 59], [41, 42, 43, 44, 45, 46, 47, 48, 49], [31, 32, 33, 34, 35, 36, 37, 38, 39], [21, 22, 23, 24, 25, 26, 27, 28, 29], [11, 12, 13, 14, 15, 16, 17, 18, 19],]
// for (let x = 1; x < 9; x++) {
//     location =
// }

// Black pieces
let pawn1B = document.querySelector('#pawn1B');
let pawn2B = document.querySelector('#pawn2B');
let pawn3B = document.querySelector('#pawn3B');
let pawn4B = document.querySelector('#pawn4B');
let pawn5B = document.querySelector('#pawn5B');
let pawn6B = document.querySelector('#pawn6B');
let pawn7B = document.querySelector('#pawn7B');
let pawn8B = document.querySelector('#pawn8B');
let rookQsB = document.querySelector('#rookQsB');
let knightQsB = document.querySelector('#knightQsB');
let bishopQsB = document.querySelector('#bishopQsB');
let queenB = document.querySelector('#queenB');
let kingB = document.querySelector('#kingB');
let bishopKsB = document.querySelector('#bishopKsB');
let knightKsB = document.querySelector('#knightKsB');
let rookKsB = document.querySelector('#rookKsB');
// White pieces
let pawn1W = document.querySelector('#pawn1W');
let pawn2W = document.querySelector('#pawn2W');
let pawn3W = document.querySelector('#pawn3W');
let pawn4W = document.querySelector('#pawn4W');
let pawn5W = document.querySelector('#pawn5W');
let pawn6W = document.querySelector('#pawn6W');
let pawn7W = document.querySelector('#pawn7W');
let pawn8W = document.querySelector('#pawn8W');
let rookQsW = document.querySelector('#rookQsW');
let knightQsW = document.querySelector('#knightQsW');
let bishopQsW = document.querySelector('#bishopQsW');
let queenW = document.querySelector('#queenW');
let kingW = document.querySelector('#kingW');
let bishopKsW = document.querySelector('#bishopKsW');
let knightKsW = document.querySelector('#knightKsW');
let rookKsW = document.querySelector('#rookKsW');
// add dragStart listeners
// Black
pawn1B.addEventListener('dragstart', dragStart);
pawn2B.addEventListener('dragstart', dragStart);
pawn3B.addEventListener('dragstart', dragStart);
pawn4B.addEventListener('dragstart', dragStart);
pawn5B.addEventListener('dragstart', dragStart);
pawn6B.addEventListener('dragstart', dragStart);
pawn7B.addEventListener('dragstart', dragStart);
pawn8B.addEventListener('dragstart', dragStart);
rookQsB.addEventListener('dragstart', dragStart);
knightQsB.addEventListener('dragstart', dragStart);
bishopQsB.addEventListener('dragstart', dragStart);
kingB.addEventListener('dragstart', dragStart);
queenB.addEventListener('dragstart', dragStart);
bishopKsB.addEventListener('dragstart', dragStart);
knightKsB.addEventListener('dragstart', dragStart);
rookKsB.addEventListener('dragstart', dragStart);
// White
pawn1W.addEventListener('dragstart', dragStart);
pawn2W.addEventListener('dragstart', dragStart);
pawn3W.addEventListener('dragstart', dragStart);
pawn4W.addEventListener('dragstart', dragStart);
pawn5W.addEventListener('dragstart', dragStart);
pawn6W.addEventListener('dragstart', dragStart);
pawn7W.addEventListener('dragstart', dragStart);
pawn8W.addEventListener('dragstart', dragStart);
rookQsW.addEventListener('dragstart', dragStart);
knightQsW.addEventListener('dragstart', dragStart);
bishopQsW.addEventListener('dragstart', dragStart);
kingW.addEventListener('dragstart', dragStart);
queenW.addEventListener('dragstart', dragStart);
bishopKsW.addEventListener('dragstart', dragStart);
knightKsW.addEventListener('dragstart', dragStart);
rookKsW.addEventListener('dragstart', dragStart);

// Dragstart function
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    // maybe highlight squares using a current location function based on the piece (e)
}

// Events for each square
square.forEach(square => {
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', drop);
});

// dragenter function
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

// dragOver function
function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

// dragLeave funciton
function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

// drop function
function drop(e) {
    e.target.classList.remove('drag-over');
    let id = e.dataTransfer.getData('text/plain');
    let draggable = document.getElementById(id);
    let h2 = document.getElementById('welcomeText');
    // Check if a piece is in the square
    if (e.target.firstChild != null) {
        if (draggable.className === e.target.className || draggable.className === e.target.firstChild.className) {
            console.log('Can not capture your own piece')
        }
        else {
            // Check if the piece is a king
            if (e.target.id === 'kingB' || e.target.firstChild.id === 'kingB') {
                let h2 = document.getElementById('welcomeText');
                h2.innerHTML = 'White Wins!';
            }
            else if (e.target.id === 'kingW' || e.target.firstChild.id === 'kingW') {
                h2.innerHTML = 'Black Wins!';
            }
            // capture the piece
            e.target.firstChild.remove();
            e.target.appendChild(draggable);
        }
    }
    else {
        e.target.appendChild(draggable);
    }
}
