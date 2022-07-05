// get elements
let board = document.querySelector('#board');
const square = document.querySelectorAll('.square');

// Location
// rows are numbered 1-8 with 1 starting on the white side of the board.
// columns are lettered a-h with a starting on the queen'side of the board.
// Location is coded as two numbers. (a-h,1-8) where a=1,b=2..., (ex. F3=(6,3)) 

// get position function
function getPosition(index) {
    const colCount = 8;
    // indexes start at 0 so add an offset of 1.
    let offset = 1;
    let rowPosition = Math.floor(8 - ((index) / colCount - offset));
    let colPosition = (index + offset) % colCount;
    // fix col 8 reading as 0
    if (colPosition == 0) {
        colPosition = 8;
    }
    return { column: colPosition, row: rowPosition };
}

// get the index of the element to place in the getPosition function
function getIndex(elm) {
    var c = elm.parentNode.children;
    i = 0;
    for (; i < c.length; i++) { if (c[i] == elm) return i; }
}

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
    let startPosition = getPosition(getIndex(draggable.parentNode))
    let h2 = document.getElementById('welcomeText');

    // Check which piece is being moved

    // pawn
    if (draggable.id === 'pawn1B' || draggable.id === 'pawn2B' || draggable.id === 'pawn3B' || draggable.id === 'pawn4B' || draggable.id === 'pawn5B' || draggable.id === 'pawn6B' || draggable.id === 'pawn7B' || draggable.id === 'pawn8B' || draggable.id === 'pawn1W' || draggable.id === 'pawn2W' || draggable.id === 'pawn3W' || draggable.id === 'pawn4W' || draggable.id === 'pawn5W' || draggable.id === 'pawn6W' || draggable.id === 'pawn7W' || draggable.id === 'pawn8W') {
        let location = getPosition(getIndex(e.target));
        // check if first move
        let firstMove = false;
        // White
        if (draggable.className === "whitePiece") {
            if (startPosition.row == 2) {
                firstMove = true;
            }
            // If first Move -> can move 2 spaces, else -> 1 space
            if (firstMove == true) {
                if (location == startPosition || (location.row == startPosition.row + 1 || location.row == startPosition.row + 2) && location.column == startPosition.column) {
                    // check that space is empty
                    if (e.target.firstChild == null) {
                        move(e, draggable)
                    }
                }
            }
            else {
                if (location == startPosition || (location.row == startPosition.row + 1 && location.column == startPosition.column)) {
                    // check that space is empty
                    if (e.target.firstChild == null) {
                        move(e, draggable)
                    }
                }
            }
            // capture with pawn
            if (location.row == startPosition.row + 1 && (location.column === startPosition.column + 1 || location.column === startPosition.column - 1)) {
                // Check that the space has a piece in it and capture
                if (e.target.firstChild != null) {
                    move(e, draggable)
                }
            }
        }

        // Black
        else if (draggable.className === "blackPiece") {
            if (startPosition.row == 7) {
                firstMove = true;
            }
            // If first Move -> can move 2 spaces, else -> 1 space
            if (firstMove == true) {
                if ((location.row == startPosition.row - 1 || location.row == startPosition.row - 2) && location.column == startPosition.column) {
                    // check that space is empty
                    if (e.target.firstChild == null) {
                        move(e, draggable)
                    }
                }
            }
            else {
                if (location.row == startPosition.row - 1 && location.column == startPosition.column) {
                    // check that space is empty
                    if (e.target.firstChild == null) {
                        move(e, draggable)
                    }
                }
            }
            // capture with pawn
            if (location.row == startPosition.row - 1 && (location.column === startPosition.column + 1 || location.column === startPosition.column - 1)) {
                // Check that the space has a piece in it and capture
                if (e.target.firstChild != null) {
                    move(e, draggable)
                }
            }
        }
        else {
            console.log('Not a valid move')
        }

    }

    // knight code is a little buggy so it is commented out for now.
    // knight
    else if (draggable.id === 'knightQsB' || draggable.id === 'knightKsB' || draggable.id === 'knightQsW' || draggable.id === 'knightKsW') {
        let location = getPosition(getIndex(e.target));
        if ((location.row == startPosition.row + 2 && location.column == startPosition.column + 1) || (location.row == startPosition.row + 2 && location.column == startPosition.column - 1) || (location.row == startPosition.row + 1 && location.column == startPosition.column + 2) || (location.row == startPosition.row - 1 && location.column == startPosition.column + 2) || (location.row == startPosition.row - 2 && location.column == startPosition.column + 1) || (location.row == startPosition.row - 2 && location.column == startPosition.column - 1) || (location.row == startPosition.row + 1 && location.column == startPosition.column - 2) || (location.row == startPosition.row - 1 && location.column == startPosition.column - 2)) {
            move(e, draggable);
        }
        else {
            console.log('Not a valid move')
        }
    }

    // king
    else if (draggable.id === 'kingW' || draggable.id === 'kingB') {
        let location = getPosition(getIndex(e.target));
        if ((location.row == startPosition.row + 1 && (location.column <= startPosition.column + 1 && location.column >= startPosition.column - 1)) || (location.row == startPosition.row - 1 && (location.column <= startPosition.column + 1 && location.column >= startPosition.column - 1)) || (location.column == startPosition.column + 1 && (location.row <= startPosition.row + 1 && location.row >= startPosition.row - 1)) || (location.column == startPosition.column - 1 && (location.row <= startPosition.row + 1 && location.row >= startPosition.row - 1))) {
            move(e, draggable);
        }
        else {
            console.log('Not a valid move')
        }
    }
    else {
        move(e, draggable);
    }

}

function move(e, draggable) {
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