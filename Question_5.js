var number = prompt("Enter the number that you want to reverse.");
var r = 0;
var s = 0;

while (number != 0) {
    r = number % 10;
    s = (s * 10) + r;
    number = parseInt(number / 10);
}
console.log(s);