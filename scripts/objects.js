/*
Hunter Harris
February 11, 2019
INFO 2220
Jon Holmes
Assignment 4
Purpose: This is a js page that is used for practicing js objects
*/

// Variables
var personHolder;
var characters = [];

// Person Object
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age;
    this.stepsToTake;
    this.takeSteps = function () {
        var sequence = "";
        for (var i = 1; i < this.stepsToTake; i++) {
            sequence += i + " ";
        }
        return sequence;
    }

    this.sumAge = function () {
        var summedAge = 0;
        for (var i = 1; i < this.age; i += 2) {
            summedAge += i;
        }
        return summedAge;
    }
}

// Converter Object
function converter() {

    // Didn't need to look up equations, so there is no source
    this.FtoC = function (fDegrees) {
        return ((fDegrees - 32) * (5 / 9));
    }
    this.CtoF = function () {
        return ((arguments[0] * (9 / 5)) + 32);
    }
}


// Random Functions
function sayHello() {
    var name = prompt("What is your name?");
    alert("Hello, " + name);
}

function greet(greeting) {
    var name = prompt("What is your name?");
    alert(greeting + ", " + name);
}

function doMaths(num1, num2) {
    alert(("" + num1 + num2) + "\r\n" + (num1 + num2) + "\r\n" + (num1 - num2) + "\r\n" + (num1 * num2) + "\r\n" + (num1 / num2));
}


// Instantiate a Person
function createPerson() {
    var fName = prompt("What is your first name?");
    var lName = prompt("What is your last name?");
    var personAge = Number(prompt("Please enter your age in years from 1 - 200"));
    if (typeof personAge === "number" && personAge <= 200 && personAge >= 1) {
        personHolder = new Person(fName, lName);
        personHolder.age = personAge;
    } else {
        alert("Please enter a number in the correct range");
    }
}

function showSteps() {
    if ((personHolder !== undefined)) {
        personHolder.stepsToTake = 11;
        alert(personHolder.firstName + " " + personHolder.lastName + " took steps\r\n" + personHolder.takeSteps());
    } else {
        alert("Object does note exist; please click the 'Fill Object' button first.");
    }
}


// Instantiate some Converters
function getDegreesInC(fValue) {
    var conv = new converter();
    alert(conv.FtoC(fValue));
}

function getDegreesInF(cValue) {
    var conv = new converter();
    alert(conv.CtoF(cValue));
}


// Fill an array with Characters who's prototype is Person
function fillCharacterArray() {
    var firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var lastNames = ["Flinstone", "Flinstone", "Flinstone", "Rubble", "Rubble", "Rubble"];
    var ages = [36, 34, 7, 34, 32, 8];

    for (var i = 0; i < firstNames.length; i++) {
        var Character = new Person(firstNames[i], lastNames[i]);
        Character.age = ages[i];
        characters[i] = Character;
    }
}

//Get the Characters
function getCharacterAt(index) {
    if (characters.length > 0) {
        alert(characters[index].firstName + " your odd age sum is " + characters[index].sumAge());
    } else {
        alert("Array has not been filled. Please click the 'fill characters array' button");
    }
}
