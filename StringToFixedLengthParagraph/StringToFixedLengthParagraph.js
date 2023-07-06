/*
Take a string of any length, split it into several strings to generate a readable paragraph of a fixed max length per line.
*/

let paragraph = "";
let maxLength = 0;
let currentLength = 0;
let finalStr = "";
const input = require('readline-sync');

paragraph = input.question("Write your paragraph below:\n");
maxLength = input.question("Enter max characters per line: ");

let strArr = paragraph.split(" ");
currentLength = maxLength;

for(let i = 0; i < strArr.length; i++) {
    if(strArr[i].length < maxLength) {
        if(strArr[i].length < currentLength) {
            finalStr = finalStr + strArr[i] + " ";
            currentLength -= (strArr[i].length + 1);
        }
        else {
            currentLength = maxLength;
            finalStr = finalStr + "\n" + strArr[i] + " ";
            currentLength -= (strArr[i].length + 1);
        }
    }
    else {
        console.log("ERROR: " + strArr[i] + " exceeds max length.");
        break;
    }
}

console.log(finalStr);