/*
Take a string of any length, split it into several strings to generate a readable paragraph of a fixed max length per line.
*/

const stringToFixedLengthParagraph = (text, num) => {
    let paragraph = text;
    let maxLength = num;
    let currentLength = 0;
    let finalStr = "";

    let strArr = paragraph.split(" ");
    currentLength = maxLength;

    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i].length < maxLength) {
            if(strArr[i].length < currentLength) {
                finalStr += strArr[i] + " ";
                currentLength -= (strArr[i].length + 1);
            }
            else {
                currentLength = maxLength;
                finalStr += "\n" + strArr[i] + " ";
                currentLength -= (strArr[i].length + 1);
            }
        }
        else {
            throw new Error(strArr[i] + " exceeds max length.");
        }
    }

    return finalStr;
}

module.exports = stringToFixedLengthParagraph;