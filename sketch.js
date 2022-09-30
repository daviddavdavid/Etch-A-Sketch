const sketchContainer = document.querySelector(".sketch-container");
console.log(sketchContainer)

function changeProperties(e) {
    e.target.style.backgroundColor = "black";
}




//creates the squares to draw on, byX means 16x by 16x for example
function createSquares(byX) {
    let widthAndHeight = (sketchContainer.offsetWidth -4) / byX
    console.log(widthAndHeight);


    for (i = 0; i < byX*byX; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("draw-div");
        squareDiv.style.width = `${widthAndHeight}px`;
        squareDiv.style.height = `${widthAndHeight}px`;
        squareDiv.style.backgroundColor = "white";
        sketchContainer.appendChild(squareDiv)
    }

    const drawDivs = document.querySelectorAll(".draw-div");

    drawDivs.forEach((div) => {
        div.addEventListener("mouseenter", changeProperties);
    });
}





createSquares(16);