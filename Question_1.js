var my_string = "Kathmandu";
var my_input = prompt("Enter any character.");
var extractedString = my_string.substring(1, 4);
//extractedString = "ath"

if (extractedString.indexOf(my_input) > -1) {
    console.log("true");
}
else {
    console.log("false");
}