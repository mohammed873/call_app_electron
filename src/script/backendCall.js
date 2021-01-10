//import packges
var remote = window.require("electron").remote;
const fs = window.require("fs");
const path = window.require("path");

//calling DOM element
var btnSave = document.getElementById("btnSave");
var btnCall = document.getElementById("call");
var output = document.getElementById("output");
var contactName = document.getElementById("contactname");
var divContact = document.getElementsByClassName("contact-div");

//specfying the files path
let pathNameContact = path.join(__dirname, "/files/contact.txt");
let pathNameHistory = path.join(__dirname, "/files/history.txt");

//saving new contact
btnSave.addEventListener("click", () => {
  let phone = output.value;
  let name = contactName.value;
  if (name === "") {
    name = "UNKNOWN";
  }
  fs.appendFileSync("\n" + pathNameContact, name + " " + phone, "UTF-8", {
    flags: "a+",
  });
  output.removeAttribute("value");
});

//saving call history
btnCall.addEventListener("click", () => {
  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    "__" +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();
  let phone = output.value;
  fs.appendFileSync("\n" + pathNameHistory, phone + " " + date, "UTF-8", {
    flags: "a+",
  });
  output.removeAttribute("value");
});
