/*
Hunter Harris
February 18, 2019
INFO 2220
Jon Holmes
Assignment 5
Purpose: This is a js page that manipulates the DOM
         On the dom.html page
*/
//Data for addDataRows
var fNames = ["Hunter", "Haylee", "Karla", "Cedar", "Cadence", "Justin"];
var lNames = ["Harris", "Speas", "Harris", "Harris", "Harris", "Harris"];
var ages = [18, 22, 43, 13, 15, 44];

//Show just the text in alert
function showInnerText() {
    var pOne = document.getElementById("pOne");
    alert(pOne.innerText);
}

//Show the html with the text in alert
function showInnerHTML() {
    var pOne = document.getElementById("pOne");
    alert(pOne.innerHTML);
}

//Add numbers to the list items
function numberList() {
    var liNodes = document.getElementsByTagName("li");
    for (var i = 0; i < liNodes.length; i++) {
        var txt = document.createTextNode(i + 1 + "");
        liNodes[i].appendChild(txt);
    }
}

//Mark every other row
function markRows() {
    var tblMarkRows = document.getElementById("tblMarkRows");
    var trNodes = tblMarkRows.getElementsByTagName("tr");
    for (var i = 0; i < trNodes.length; i++) {
        if (i % 2 == 1) {
            trNodes[i].classList.add("other");
        }
    }
}

//Add data in rows to the table
function addRows() {
    var tblAddRows = document.getElementById("tblAddRows");
    for (var i = 0; i < fNames.length; i++) {
        var row = document.createElement("TR");
        tblAddRows.appendChild(row)
        var middle = tblAddRows.childNodes[1]
        if (i % 2 == 0) {
            row.classList.add("other");
        }
        for (var j = 0; j < 3; j++) {
            var cell = document.createElement("TD");
            //Switch for adding data in rows
            switch (j) {
                case 0:
                    cell.innerText = fNames[i];
                    break;
                case 1:
                    cell.innerText = lNames[i];
                    break;
                case 2:
                    cell.innerText = ages[i];
                    break;
                default:
                    break;
            }
            row.appendChild(cell);
        }
    }
}

//Add a success message
function addSuccess() {
    var container = document.getElementById("divMessages");
    var div = document.createElement("DIV");
    var message = document.createTextNode("This is a Success Message");
    div.appendChild(message);
    div.classList.add("success");
    container.appendChild(div);
}

//Add a warning message
function addWarning() {
    var container = document.getElementById("divMessages");
    var div = document.createElement("DIV");
    var message = document.createTextNode("This is a Warning Message");
    div.appendChild(message);
    div.classList.add("warning");
    container.appendChild(div);
}

//Add a error message
function addError() {
    var container = document.getElementById("divMessages");
    var div = document.createElement("DIV");
    var message = document.createTextNode("This is a Error Message");
    div.appendChild(message);
    div.classList.add("error");
    container.appendChild(div);
}