var a = prompt("Enter the first number");
var b = prompt("Enter the second number");

if (a > b) {
    var firstNumber = a;
    var secondNumber = b;
}
else if (b > a) {
    var firstNumber = b;
    var secondNumber = a;
}
else {
    var firstNumber = a;
    var secondNumber = b;
}

if (firstNumber == 8) {
    console.log("The first number is 8.");
}
else if (secondNumber == 8) {
    console.log("The second number is 8.");
}
else if (firstNumber + secondNumber == 8) {
    console.log("The sum of the two numbers is 8.");
}
else if (firstNumber - secondNumber == 8) {
    console.log("The difference of the two numbers is 8.");
}
else {
    console.log("Nether one of the numbers is 8 nor their sum or difference is!!!")
}