function generateGrid(dimension) {
    let gridSquareSize = 960 / dimension;
    const grid = document.querySelector('#container');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < dimension**2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.height = gridSquareSize + 'px';
        gridSquare.style.width = gridSquareSize + 'px';
        grid.appendChild(gridSquare);
        gridSquare.onmouseover = function() {
            this.style.backgroundColor = 'black';
        }
    }
}

document.getElementById('button').addEventListener('click', (e) => {
    let text;
    let userInput = prompt('Set your new grid dimensions');
    if (userInput > 100) {
        window.alert('Choose a value below 100');
    } else {
        generateGrid(userInput);
    }
});

generateGrid(16);