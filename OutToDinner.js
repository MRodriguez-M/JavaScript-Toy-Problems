/*
1. Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15.
Create a variable called tip and assign it the result of multiplying bill by a 15% tip rate.

2. Add the bill and tip together and store it into a variable called total.
Print the total to the JavaScript console.
*/

// Create variables for bill, tip, and total
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;

// Output total cost
console.log("$" + total);