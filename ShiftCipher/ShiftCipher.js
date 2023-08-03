/*
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

const shiftCipher = (str) => {
    let encodeStr = "";

    for(let i = 0; i < str.length; i++) {
        //Check and encode for letters A-M
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
            encodeStr += String.fromCharCode(str.charCodeAt(i) + 13);
        }
        //Check and encode for letters N-Z
        else if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
            encodeStr += String.fromCharCode(str.charCodeAt(i) - 13);
        }
        //Check for characters not A-Z and push as is
        else {
            encodeStr += str[i];
        }
    }

    return encodeStr;
}

module.exports = shiftCipher;