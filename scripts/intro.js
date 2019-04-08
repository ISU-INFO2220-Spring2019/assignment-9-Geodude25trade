/*
Hunter Harris
February 1, 2019
INFO 2220
Jon Holmes
Assignment 3
Purpose: This is a js page that fires as soon as it is downloaded
*/
alert("The script in the header has run.");
var loadLast = "I really am last";
var myArray;
if (myArray === undefined) {
    myArray = [];
} else {
    alert("The variable \"myArray\" was not undefined!");
}

//values to add to the end of the array
myArray.push(34);
myArray.push(5.5);
myArray.push(33.5);
myArray.push(46.5);
myArray.push(59);
myArray.push(64);
myArray.push(43);
myArray.push(64);
myArray.push(48);
myArray.push(49);
myArray.push(40);
myArray.push(59);
myArray.push(44);
myArray.push(54);
myArray.push(19.5);
myArray.push(25);
myArray.push(69);
myArray.push(23);

average = 0;

for (var i = 0; i < myArray.length; i++) {
    average += myArray[i];
}
average = average / myArray.length;
alert(average);

function returnName() {
    return "Hunter Harris";
}