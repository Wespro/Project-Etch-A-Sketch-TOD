//Add varribles
const body = document.querySelector("body");
const container = document.createElement("div");

//Add classes
container.classList.add("container");

// Adding container
body.appendChild(container);

// Add buttun for the user to add the number of squares he'dlike

const button = document.createElement("button");
button.textContent = "Sketch on";
container.appendChild(button);

//fucntion of creating and resiting sketch on comand by clicking sketch on button
function addNumOfRowsOfNumOfDivs(e) {
  // Resetinf for new sketchpad

  if (container.contains(document.querySelector(".row"))) {
    const rows = document.querySelectorAll(".row");
    rows.forEach((element) => {
      container.removeChild(element);
    });
  }
  // Getting the number of squares per side the user wants
  const numOfSquares = prompt(
    `Please Enter the number of squares per side you'd like the sketch to have. 
    Max 50`
  );
  // number of squers per side limit check
  if (numOfSquares <= 50) {
    //Adding grid of row of divs <= the 100 as the user wants
    for (let i = 0; i < numOfSquares; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      container.appendChild(row);
      for (let i = 0; i < numOfSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        row.appendChild(div);
      }
    }
  } else {
    addNumOfRowsOfNumOfDivs();
  }
}

//Eventlistner for the hover effect of painting
window.addEventListener("mouseover", addBackgroundColor);

function addBackgroundColor(e) {
  if (!e.target.classList.contains("square")) {
    return;
  }
  e.target.classList.add("colored");
}

//Eventlistner for the sketch on button
button.addEventListener("click", addNumOfRowsOfNumOfDivs);
