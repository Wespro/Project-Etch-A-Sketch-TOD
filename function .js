//Add varribles
const body = document.querySelector("body");
const container = document.createElement("div");

//Add classes
container.classList.add("container");

// Adding container
body.appendChild(container);

//Adding grid of 16*16 grid of divs
function addNumOfRowsOfNumOfDivs() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let i = 0; i < 16; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      row.appendChild(div);
    }
  }
}

addNumOfRowsOfNumOfDivs();

//Eventlistner for the hover effect of painting
window.addEventListener("mouseover", addBackgroundColor);

function addBackgroundColor(e) {
  if (!e.target.classList.contains("square")) {
    return;
  }
  e.target.classList.add("colored");
}
