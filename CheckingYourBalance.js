/*
Write code to represent checking your balance at the ATM.

Use the following variables in your solution:
balance - the account balance
isActive - if account is active
checkBalance - if you want to check balance
*/

var balance = 325.00;
var isActive = false;
var checkBalance = true;

// If statement to check is balanced will be checked
if (checkBalance) {
    // If statement to check account is active and blance is greater than zero
    if (isActive == true && balance > 0) {
        // Print balance
        console.log("Your balance is $" + balance + ".");
    }
}
else {
    // Print exit message if balance will not be checked
    console.log("Thank you. Have a nice day!");
}