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


function divGenerators(numberOfDiv) {
    for (let i = 0; i < numberOfDiv; i++) {
        let row = document.createElement("div");
        row.className= "row";
        for (let j = 0; j < numberOfDiv; j++) {
            let cell = document.createElement("div");
            cell.className = "gridSquare";
            row.appendChild(cell)
        }
        grid.appendChild(row)
        console.log(row)
    }
   
}
