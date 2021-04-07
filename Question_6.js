var number = prompt("Enter the number.");

if (number == 0 || number == 1) {
    console.log("The given input is neither prime nor composite.");
}
else {
    var isPrime = true;

    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            console.log("Composite Number.");
            isPrime = false;
            break;
        }
    }
}
if (isPrime == true) {
    console.log("Prime Number.");
}