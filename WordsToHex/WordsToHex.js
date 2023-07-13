/*
Take the first three characters in each word in a string and convert them to their hexadecimal values. These values are combined to make an RGB hex value (e.g. #ffffff)
The function should return an array of RGB hex value strings for each word in the given string.
If the word has less than 3 characters the value 00 should be used to complete the RGB hex value.
*/

const wordsToHex = (str) => {
    let strArr = str.split(" ");
    let hexArr = [];

    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i].length == 1) {
            hexArr.push("#" + strArr[i].charCodeAt(0).toString(16) + "0000");
        }
        else if(strArr[i].length == 2) {
            hexArr.push("#" + strArr[i].charCodeAt(0).toString(16) + strArr[i].charCodeAt(1).toString(16) + "00");
        }
        else {
            hexArr.push("#" + strArr[i].charCodeAt(0).toString(16) + strArr[i].charCodeAt(1).toString(16) + strArr[i].charCodeAt(2).toString(16));
        }
    }

    return hexArr;
}

console.log(wordsToHex("This sentence is testing the function's capabilties."));