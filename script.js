let container = document.getElementById('container')
let comp = container.currentStyle || getComputedStyle(container,null)

window.onload = function() {
    let numberOfDiv = 16
    for (let i = 0; i < numberOfDiv; i++) {
        for (let j = 0; j < numberOfDiv; j++) {
             let cell = document.createElement("div");
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
    let promptValueNumber = Number(promptValue);
    if(promptValueNumber <= 100) {
        while (container.firstChild){
            container.removeChild(container.firstChild)
        }
        for (let i = 0; i < promptValueNumber; i++) {
            for (let j = 0; j < promptValueNumber; j++) {   
             let cell = document.createElement("div");
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
