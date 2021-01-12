//import required packdges
var remote = window.require("electron").remote;
const lineReader = window.require("line-reader");
const fs = window.require("fs");
const path = window.require("path");

//specfying the file path
let pathNameContact = path.join(__dirname, "/../files/contact.txt");

//calling DOM element
var showContact = document.getElementById("showContact");

//read data from the contact file
window.addEventListener("load", () => {
  fs.readFileSync(pathNameContact, "utf8")
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
      container.className = "container";
      var name = document.createElement("h1");
      name.className = "namePhone";
      var number = document.createElement("p");
      number.className = "numberPhone";
      name.innerHTML = stringArray[0];
      number.innerHTML = stringArray[2];

      container.appendChild(name);
      container.appendChild(number);
      showContact.appendChild(container);
    });
});

//display data on page loading
