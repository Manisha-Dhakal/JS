var firstNumber = prompt("Enter the first positive number");
var secondNumber = prompt("Enter the second positive number");
var thirdNumber = prompt("Enter the third positive number");

if (firstNumber < 0 || secondNumber < 0 || thirdNumber < 0) {
    throw Error("Negative integers not allowed!!!")
}

var lastDigitOfFirstNumber = firstNumber % 10;
var lastDigitOfSecondNumber = secondNumber % 10;
var lastDigitOfThirdNumber = thirdNumber % 10;

if ((lastDigitOfFirstNumber == lastDigitOfSecondNumber) && (lastDigitOfSecondNumber == lastDigitOfThirdNumber) && (
    lastDigitOfThirdNumber == lastDigitOfFirstNumber)
) {
    console.log("The last digit of all the three numbers are equal.");
}
else {
    console.log("The last digit of all the three numbers are not equal.");
}