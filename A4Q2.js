function checkNumber(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
let number = parseFloat(prompt("Enter a number:"));
checkNumber(number);
