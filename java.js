const container = document.querySelector('#container');
const btn = document.querySelector('#button');


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

let gridSize;

function createGrid (gridSize) {
    container.replaceChildren();
    
    gridSize = prompt ('Enter your grid si\e');

}
function changeColor () {
    column.style.backgroundColor = ('blue');
}

container.addEventListener('mouseover', function(e) {
    if (e.target.matches('.rows' || '.columns')) {
        e.target.classList.add('active');
    }
});

function alert () {
    alert('lskdjf');
}

btn.addEventListener('click', createGrid);




