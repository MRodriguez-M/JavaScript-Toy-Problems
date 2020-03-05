/*
Loop through the numbers 1 to 100
If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by both 3 and 5, print "FizzBuzz"
If the number is not divisible by 3 or 5, print the number
*/

var number = 1;

// While loop to check every number from 1-100
while (number <= 100) {
    // If statement to check if number is divisible by 3 and 5
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Else if statement to check if number is divisible by 3
    else if (number % 3 === 0) {
        console.log("Fizz");
    }
    // Else if statement to check if number is divisible by 5
    else if (number % 5 === 0) {
        console.log("Buzz");
    }
    // Print out number if it does not meet any of the prior requirements
    else {
        console.log(number);
    }
// Increase number by 1 after every check
number = number + 1;
}