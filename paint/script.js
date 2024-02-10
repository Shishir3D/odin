const jsDiv = document.querySelector("#js-div");
jsDiv.style.display = "flex";
jsDiv.style.gap = "1px";
jsDiv.style.flexDirection = "column";
jsDiv.style.height = "90vh";

let columnLength;
let rowLength;
let boxStyleHeight;

console.log(columnLength);

let boxRow;

//creates one box and adds it to the row
function createABox() {
  let box;
  box = document.createElement("div");
  box.classList.add("box");

  box.style.backgroundColor = "red";
  box.style.height = "100%";
  box.style.width = "100%";

  //hover effect
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue";

    //timeout function start
    setTimeout(() => {
      box.style.backgroundColor = "red";
    }, 1000);
    //timeout function end
  });

  boxRow.appendChild(box);
}

//creats one row and add it to the jsDiv (creates the boxes by calling the createBox() function)
function createABoxRow() {
  boxRow = document.createElement("div");
  boxRow.classList.add("box-row");
  boxRow.style.display = "flex";
  boxRow.style.gap = "2px";
  boxRow.style.height = boxStyleHeight;

  for (let i = 0; i < columnLength; i++) {
    createABox();
    jsDiv.appendChild(boxRow);
  }
}

function create16Rows() {
  for (let i = 0; i < rowLength; i++) {
    createABoxRow();
  }
}

function getUserWidth() {
  let userWidth = Number(document.querySelector("#user-width").value);
  rowLength = userWidth;
  create16Rows();
}

function getUserHeight() {
  let userHeight = Number(document.querySelector("#user-height").value);
  columnLength = userHeight;
  boxStyleHeight = String(90 / rowLength) + "%";
  create16Rows();
}