/*
Hunter Harris
February 22, 2019
INFO 2220
Jon Holmes
Assignment 6
Purpose: This is a js page that manipulates the DOM
         On the events.html page using events as triggers
*/

//event handlers

//when the mouse is moving over the target
function moveMouse(e) {
    e = e || window.event;
    var mouseX = e.x;
    var mouseY = e.y;
    var mouseCoords = document.getElementById("mouseCoords");
    mouseCoords.innerText = "X: " + mouseX + " Y: " + mouseY;
}

//when the mouse is clicked over the target
function mousePressed(e) {
    e = e || window.event;
    var trgt = e.target || e.srcElement;
    if (trgt !== e.currentTarget) {
        trgt.className = "pressed";
    }
}

//used to counteract classname changes
function resetClass(e) {
    e = e || window.event;
    var trgt = e.trgt || e.srcElement;
    trgt.className = "";
}

//when the mouse is over the target (only fires once until mouse reenters the target)
function mouseHeadOver(e) {
    e = e || window.event;
    e.currentTarget.className = "overHead";
}

//add event listeners to the specified elements
window.onload = function () {
    var section = document.getElementById("secMouser");
    section.addEventListener("mousemove", moveMouse);
    section.addEventListener("mousedown", mousePressed);
    section.addEventListener("mouseup", resetClass);

    var headers = section.getElementsByTagName("H1");
    for (var i = 0; i < headers.length; i++) {
        headers[i].addEventListener("mouseover", mouseHeadOver);
        headers[i].addEventListener("mouseout", resetClass);
    }

    var button = document.getElementById("btnSayHello");
    button.addEventListener("click", function () { alert("Hello User") });
    button.addEventListener("mousemove", function (e) {
        e = e || window.event;
        document.getElementById("mouseCoords").innerText = "You are over the button!";
        e.stopPropagation();
    })
}