/*
Create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle.

buildTriangle(10);
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 
*/

// Function to create each individual row in the triangle
function createRow(length) {
    var row = "";
    // For loop to create one row of the triangle
    for (var i = 1; i <= length; i++) {
        row += "* ";
    }
    return row + "\n";
}

// Function to build the entire triangle
function buildTriangle(rowNum) {
    var triangle = "";
    // For loop to call function createRow based on number set in the parameters
    for (var n = 1; n <= rowNum; n++) {
        triangle += createRow(n);
    }
    return console.log(triangle);
}

// Call function and create triangle
buildTriangle(10);