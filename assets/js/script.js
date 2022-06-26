// get elements
let board = document.querySelector('#board');
const square = document.querySelectorAll('.square');
// Black pieces
// const rookQsB = document.querySelector('.rookQsB');

// const kingB = document.querySelector('.kingB');
// White pieces

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
    setTimeout(() => {
        e.targer.classList.add('hide');
    }, 0);
}

square.forEach(square => {
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    draggable.classList.remove('hide');
}