//import required packdges
var remote = window.require("electron").remote;
const lineReader = window.require("line-reader");
const fs = window.require("fs");
const path = window.require("path");

//specfying the file path
let pathNameHistory = path.join(__dirname, "/files/history.txt");

//calling DOM element
var showHistory = document.getElementById("showHistory");

//read data from the history file
window.addEventListener("load", () => {
  console.log('window hhh')
  fs.readFileSync(pathNameHistory, "utf8")
    .split(/\r?\n/)
    .forEach(function (line) {
      line = line.split(" ");
      var stringArray = new Array();
      for (var i = 0; i < line.length; i++) {
        stringArray.push(line[i]);
        if (i != line.length - 1) {
          stringArray.push(" ");
        }
    }

    console.log(stringArray[0] + " " + stringArray[2]);
    var container = document.createElement("div");
    container.className = 'container';
    var number = document.createElement("h1");
    number.className = 'numberPhone';
    var date = document.createElement("p");
    date.className = 'datePhone'
    number.innerHTML = stringArray[0];
    date.innerHTML = stringArray[2];

    container.appendChild(number);
    container.appendChild(date);
    console.log(container);
    showHistory.appendChild(container);
    });
});

//display data on page loading
