var style = document.createElement("style");
style.innerHTML = "::-webkit-scrollbar { display: none; }";

document.head.appendChild(style);

document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";

document.body.style.margin = "0";
document.body.style.padding = "0";

let maincontainer = document.createElement("div");

maincontainer.id = "maincontainer";
maincontainer.style.display = "flex";
maincontainer.style.flexWrap = "wrap";

document.body.appendChild(maincontainer);

const section1 = document.createElement("div");
section1.id = "section1";

const section2 = document.createElement("div");
section2.id = "section2";

const section3 = document.createElement("div");
section3.id = "section3";

maincontainer.appendChild(section1);
maincontainer.appendChild(section2);
maincontainer.appendChild(section3);

maincontainer.style.width = "100%";
section1.style.width = "100%";
section2.style.width = "100%";
section3.style.width = "100%";

section1.style.backgroundColor = "white";

section2.style.backgroundColor = "#0BA40B";

section3.style.backgroundColor = "grey";

const form = document.createElement("form");
section1.appendChild(form);

function createCheckboxAndLabel(id, name, labelText) {
  var checkboxInput = document.createElement("input");

  checkboxInput.id = id;
  checkboxInput.name = name;
  checkboxInput.value = "";
  checkboxInput.className = "hidden";
  checkboxInput.type = "checkbox";

  var labelElement = document.createElement("label");

  labelElement.htmlFor = id;
  labelElement.className = "material-symbols-outlined";
  labelElement.textContent = labelText;

  form.appendChild(checkboxInput);
  form.appendChild(labelElement);
}

createCheckboxAndLabel("copy", "copy", "content_copy");
createCheckboxAndLabel("cut", "cut", "content_cut");
createCheckboxAndLabel("paste", "paste", "content_paste");
createCheckboxAndLabel("bold", "bold", "format_bold");
createCheckboxAndLabel("italic", "italic", "format_italic");
createCheckboxAndLabel("underline", "underline", "format_underlined");

function createRadioAndLabel(id, name, value, labelText) {
  var radioInput = document.createElement("input");

  radioInput.id = id;
  radioInput.name = name;
  radioInput.value = value;
  radioInput.className = "hidden";
  radioInput.type = "radio";

  var labelElement = document.createElement("label");

  labelElement.htmlFor = id;
  labelElement.className = "material-symbols-outlined";
  labelElement.textContent = labelText;

  form.appendChild(radioInput);
  form.appendChild(labelElement);
}

createRadioAndLabel("left", "align", "left", "format_align_left");
createRadioAndLabel("center", "align", "center", "format_align_center");
createRadioAndLabel("right", "align", "right", "format_align_right");

var colorInput = document.createElement("input");
colorInput.id = "formating";
colorInput.name = "backgroundColor";
colorInput.value = "";
colorInput.className = "color";
colorInput.type = "color";
form.appendChild(colorInput);

var colorLabel = document.createElement("label");
colorLabel.htmlFor = "formating";
colorLabel.className = "material-symbols-outlined";
colorLabel.textContent = "format_color_text";
form.appendChild(colorLabel);

var anotherColorInput = document.createElement("input");
anotherColorInput.id = "color";
anotherColorInput.name = "color";
anotherColorInput.value = "";
anotherColorInput.className = "color";
anotherColorInput.type = "color";
form.appendChild(anotherColorInput);

var anotherColorLabel = document.createElement("label");
anotherColorLabel.htmlFor = "color";
anotherColorLabel.className = "material-symbols-outlined";
anotherColorLabel.textContent = "format_color_fill";
form.appendChild(anotherColorLabel);

function createButtonWithIcon(className, iconText) {
  var button = document.createElement("button");
  button.className = className;

  var span = document.createElement("span");
  span.className = "material-symbols-outlined";
  span.textContent = iconText;

  button.appendChild(span);
  form.appendChild(button);
}

createButtonWithIcon("button1", "cloud_download");
createButtonWithIcon("button2", "cloud_upload");

// iss code me mai sarre check box jis ka classname hidden hai uska diaplay none kar raha hu
var hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(function (element) {
  element.style.display = "none";
});

var materialClass = document.querySelectorAll(".material-symbols-outlined");

materialClass.forEach(function (element) {
  element.style.margin = "10px";
});

section1.style.display = "flex";
section1.style.justifyContent = "center";
section1.style.padding = "5px";

var formatingElements = document.getElementById("formating");
formatingElements.style.display = "none";

var coloring = document.getElementById("color");
coloring.style.display = "none";

/*/ *******************************     section2 ka code ****************************** /*/

section2.style.display = "flex";
section2.style.alignItems = "center";
section2.style.padding = ".5rem";

let indexdiv = document.createElement("div");
let searchdiv = document.createElement("input");

indexdiv.innerText = "null";
indexdiv.style.backgroundColor = "white";
indexdiv.style.border = "solid black 1px";
indexdiv.style.padding = ".07rem";
indexdiv.style.marginRight = "10px";

searchdiv.style.width = "90%";
searchdiv.placeholder = "Search...";

section2.appendChild(indexdiv);
section2.appendChild(searchdiv);

/*/ *******************************   section3 ka code ******************************** /*/

section3.style.display = "flex";
const srno = document.createElement("div");
const table = document.createElement("div");

section3.appendChild(srno);
section3.appendChild(table);

function creatingBoxes() {
  for (let i = 0; i <= 100; i++) {
    const creatdiv = document.createElement("div");
    creatdiv.className = "creatdiv";
    creatdiv.id = "srno" + i;
    creatdiv.style.width = "40px";
    creatdiv.style.height = "30px";
    creatdiv.style.display = "flex";
    creatdiv.style.justifyContent = "center";
    creatdiv.style.alignItems = "center";
    creatdiv.style.backgroundColor = "#ededed";
    creatdiv.style.border = "solid black 1px";
    if (i !== 0) {
      creatdiv.innerText = i;
    }

    srno.appendChild(creatdiv);
  }
}
creatingBoxes();

section3.style.overflow = "hidden";
section3.style.height = "85vh";
section3.style.overflowY = "auto";
section3.style.overflowX = "auto";
section3.style.WebkitScrollbar = "0";

section3.style.webkitScrollbar = "none"; // used chatgpt here Webkit browsers (Chrome, Safari, Opera)

// Hide scrollbar for IE, Edge, and Firefox
section3.style.msOverflowStyle = "none"; // IE and Edge
section3.style.scrollbarWidth = "none"; // Firefox
section3.style.webkitScrollbar.display = "none";

/*/ *******************************   srno ka code upar wala hai******************************** /*/

const first = document.createElement("div");
const second = document.createElement("div");

first.style.display = "flex";
// second.style.display="flex";

table.appendChild(first);
table.appendChild(second);

function createColumn() {
  for (let i = 1; i <= 26; i++) {
    const creatediv = document.createElement("div");
    creatediv.className = "columndiv";
    creatediv.style.width = "6rem";
    creatediv.style.height = "30px";
    creatediv.style.display = "flex";
    creatediv.style.justifyContent = "center";
    creatediv.style.alignItems = "center";
    creatediv.style.backgroundColor = "#ededed";
    creatediv.style.border = "solid black 1px";
    creatediv.innerText = String.fromCharCode(i + 64);
    first.appendChild(creatediv);
  }
}
createColumn();

// mainCol = document.createElement("div");
// table.appendChild(mainCol);

function createColumnDiv(b) {
  const row = document.createElement("div");
  row.className = "row";
  row.style.display = "flex";
  for (let i = 1; i <= 26; i++) {
    const cells = document.createElement("div");
    cells.className = "columndiv";
    cells.style.backgroundColor = "#ededed";
    cells.style.width = "6rem";
    cells.style.height = "30px";
    cells.style.border = "solid black 1px";
    cells.contentEditable = true;
    cells.id = String.fromCharCode(64 + i) + b;
    row.appendChild(cells);
    cells.addEventListener("focus", onfocus);
    cells.addEventListener("input", changeIt);
  }
  second.appendChild(row);
}

for (let i = 1; i <= 100; i++) {
  createColumnDiv(i);
}


function onfocus(event){
    console.log(event.target);
    indexdiv.innerText=event.target.id;
}

function changeIt(){}


// this is 