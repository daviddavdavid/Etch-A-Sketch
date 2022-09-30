const sketchContainer = document.querySelector(".sketch-container");
console.log(sketchContainer)

const resetButton = document.querySelector(".reset-button");
const gridButton = document.querySelector(".grid-button");






//changes the color of all the div (so basically lets you draw)
function changeProperties(e) {
    e.target.style.backgroundColor = "black";
}

function resetSquareGrid(e) {
    let squares = document.querySelectorAll(".draw-div")

    let answer = prompt("Please enter the grid size you want? The max is 100x.", 16)

    console.log(answer, typeof(Number(answer)))

    if (answer > 100 || answer < 0 || isNaN(answer) == true) {
        console.log("ERROR, USER PUT IN A WRONG VALUE");
        return;
    }

    
    squares.forEach(element => {
        element.remove()
    });


    createSquares(answer);;

}


function resetSquareColors() {
    const squares = document.querySelectorAll(".draw-div")

    squares.forEach(element => {
        element.style.backgroundColor = "white";
    });
}



//creates the squares to draw on, byX means 16x by 16x for example
function createSquares(byX) {
    let widthAndHeight = (sketchContainer.offsetWidth -4) / byX;
    console.log(widthAndHeight);

    //byX * byX calculates the number of divs needed
    for (i = 0; i < (byX*byX); i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("draw-div");
        squareDiv.style.width = `${widthAndHeight}px`;
        squareDiv.style.height = `${widthAndHeight}px`;
        squareDiv.style.backgroundColor = "white";
        sketchContainer.appendChild(squareDiv);
    }

    const drawDivs = document.querySelectorAll(".draw-div");

    drawDivs.forEach((div) => {
        div.addEventListener("mouseenter", changeProperties);
    });
}

resetButton.addEventListener("click", resetSquareColors)
gridButton.addEventListener("click", resetSquareGrid)
createSquares(16);