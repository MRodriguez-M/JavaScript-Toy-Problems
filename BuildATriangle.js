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

function createRow(length) {
    var row = "";
    // For loop to create one row of the triangle
    for (var i = 1; i <= length; i++) {
        row = row + "* ";
    }
    return row + "\n";
}

function buildTriangle(rows) {
    
}

// Call function and create triangle
buildTriangle(10);