let container = document.getElementById('container')
let comp = container.currentStyle || getComputedStyle(container,null)

window.onload = function() {
    let numberOfDiv = 16
    for (let i = 0; i < numberOfDiv; i++) {
        for (let j = 0; j < numberOfDiv; j++) {
             let cell = document.createElement("div");
             if (cell != null) {
               let randomColor = Math.floor(Math.random()*16777215).toString(16);
               cell.style.backgroundColor = "#FFFFFF";
               cell.onmousemove = function () { this.style.backgroundColor = "#" + randomColor; this.style.color = "#" + randomColor; };
               cell.onmouseout = function () { this.style.backgroundColor = "#" + randomColor; this.style.color = "#" + randomColor; };
             }
             cell.className = "gridSquare";
             let cellStyle = getComputedStyle(cell,null)
             let cellStyleWidthValue = cellStyle.width.replace(/\D/g, '');
             cellStyleWidthValue = comp.width.replace(/\D/g, '') / numberOfDiv
             let cellStyleWidthString = cellStyleWidthValue.toString() + "px"
             cell.style.width = cellStyleWidthString
             container.appendChild(cell)

        }
    }
}

function popUp() {

    
    let promptValue = prompt();
    if(promptValue === null) return;
    let promptValueNumber = Number(promptValue);
    container.replaceChildren()
    if(promptValueNumber <= 100) {
        for (let i = 0; i < promptValueNumber; i++) {
            for (let j = 0; j < promptValueNumber; j++) {   
              let cell = document.createElement("div");
              if (cell != null) {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                cell.style.backgroundColor = "#FFFFFF";
                cell.onmousemove = function () { this.style.backgroundColor = "#" + randomColor; this.style.color = "#" + randomColor; };
                cell.onmouseout = function () { this.style.backgroundColor = "#" + randomColor; this.style.color = "#" + randomColor; };
              }
             cell.className = "gridSquare";
             let cellStyle = getComputedStyle(cell,null)
             let cellStyleWidthValue = cellStyle.width.replace(/\D/g, '');
             cellStyleWidthValue = comp.width.replace(/\D/g, '') / promptValueNumber
             let cellStyleWidthString = cellStyleWidthValue.toString() + "px"
             cell.style.width = cellStyleWidthString
             container.appendChild(cell)
            }
        }
    }
}



