let grid = document.createElement("div");
document.getElementById('container').appendChild(grid)

window.onload = function() {
    let numberOfDiv = 16
    for (let i = 0; i < numberOfDiv; i++) {
        let row = document.createElement("div");
        row.className= "row";
        for (let j = 0; j < numberOfDiv; j++) {
            let cell = document.createElement("div");
            cell.className = "gridSquare";
            row.appendChild(cell)
        }
        grid.appendChild(row)
    }
}

function popUp() {
    
    const newGrid = document.createElement("div");
    document.getElementById('container').appendChild(newGrid)
    let promptValue = prompt();
    let promptValueNumber = Number(promptValue);
    grid.remove()
    console.log(grid)
    console.log(newGrid)
    if(promptValueNumber <= 100) {
        for (let i = 0; i < promptValueNumber; i++) {
            let row = document.createElement("div");
            row.className= "row";
            for (let j = 0; j < promptValueNumber; j++) {
                let cell = document.createElement("div");
                cell.className = "gridSquare";
                row.appendChild(cell)

            }
            newGrid.appendChild(row)
        }
    }
    grid = newGrid

   /* for (let i = 0; i < numberOfDiv; i++) {
        let row = document.createElement("div");
        row.className= "row";
        for (let j = 0; j < numberOfDiv; j++) {
            let cell = document.createElement("div");
            cell.className = "gridSquare";
            row.appendChild(cell)
        }
        grid.appendChild(row)
        console.log(row)
    }*/
   
}
