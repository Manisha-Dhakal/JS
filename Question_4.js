var firstString = prompt("Enter the first string.");
var secondString = prompt("Enter the second string.");

//Removing the first character of the two strings
var a = firstString.slice(1);
var b = secondString.slice(1);

var c = a + b;  //String concatenation using + operator
console.log(c);