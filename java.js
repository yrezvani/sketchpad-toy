const container = document.querySelector('#container');
const btn = document.querySelector('#button');
let gridSize


for (let i = 0; i <16; i++) {
    column = document.createElement('div');
    column.classList.add('columns');
    for (let j = 0; j < 16; j++) {
        row = document.createElement('div');
        row.classList.add('rows')
        column.appendChild(row);
    }
    container.appendChild(column);
}

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        column = document.createElement('div');
        column.classList.add('columns');
        for (let j = 0; j < gridSize; j++) {
            row = document.createElement('div');
            row.classList.add('rows')
            column.appendChild(row);
        }
        container.appendChild(column);
    }    
}

function resetGame (gridSize) {
    container.replaceChildren();
    gridSize = prompt ('Enter grid size');
    if (typeof gridSize == 'number') {
        gridSize = prompt ('Oops! That\'s not a number. Enter a number for your grid size');
    } else if (gridSize > 100) {
        gridSize = prompt ('That\'s too big! Enter a grid size between 1 and 100');
    }
    createGrid (gridSize);
}


function changeColor () {
    column.style.backgroundColor = ('blue');
}

container.addEventListener('mouseover', function(e) {
    if (e.target.matches('.rows' || '.columns')) {
        e.target.classList.add('active');
    }
});

btn.addEventListener('click', resetGame);




