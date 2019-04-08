/*
Hunter Harris
February 1, 2019
INFO 2220
Jon Holmes
Assignment 3
Purpose: This is a js page that fires after everything in the html page is loaded
*/
//if loadlast has been intialized go ahead and say so
if (!(loadLast === undefined)) {
    alert("The deferred script has run.");
    alert(loadLast);
}