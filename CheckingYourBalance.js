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
    if (isActive === true && balance > 0) {
        // Print balance
        console.log("Your balance is $" + balance + ".");
    }
    // Else if statement to check if account is active
    else if (isActive === false) {
        // Print error message if account is not active
        console.log("Your account is no longer active.");
    }
    // Else if statement to check if balance is zero
    else if (balance === 0) {
        // Print message notfiying user that account is at zero
        console.log("Your account is empty.");
    }
    // Else if statement to check if balance is less than zero
    else if (balance < 0) {
        // Print error message for negative balance
        console.log("Your balance is negative. Please contact bank.");
    }
}
else {
    // Print exit message if balance will not be checked
    console.log("Thank you. Have a nice day!");
}