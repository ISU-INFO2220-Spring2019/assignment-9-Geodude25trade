/*
Hunter Harris
February 1, 2019
INFO 2220
Jon Holmes
Assignment 3
Purpose: This is a js page that fires in the body of the html
*/
var greeting = prompt("Enter a greeting");
var name = returnName();

//checking on prompt input
if (greeting === null || greeting === "") {
    alert("I'm sorry " + name + "; I do not know what to do.");
} else {
    alert(greeting + ", " + name);
}