/*
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str) {
    //Variable to hold encoded version of string
    var encodeStr = "";
    
    //Loop through entire original string
    for(var i = 0; i < str.length; i++) {
        //Check and encode for letters A-M
        if(str.charCodeAt(i) == 65 || str.charCodeAt(i) == 66 || str.charCodeAt(i) == 67 || str.charCodeAt(i) == 68 || str.charCodeAt(i) == 69 || str.charCodeAt(i) == 70 || str.charCodeAt(i) == 71 || str.charCodeAt(i) == 72 || str.charCodeAt(i) == 73 || str.charCodeAt(i) == 74 || str.charCodeAt(i) == 75 || str.charCodeAt(i) == 76 || str.charCodeAt(i) == 77) {
            encodeStr += String.fromCharCode(str.charCodeAt(i) + 13);
        } else if(str.charCodeAt(i) == 78 || str.charCodeAt(i) == 79 || str.charCodeAt(i) == 80 || str.charCodeAt(i) == 81 || str.charCodeAt(i) == 82 || str.charCodeAt(i) == 83 || str.charCodeAt(i) == 84 || str.charCodeAt(i) == 85 || str.charCodeAt(i) == 86 || str.charCodeAt(i) == 87 || str.charCodeAt(i) == 88 || str.charCodeAt(i) == 89 || str.charCodeAt(i) == 90) {
            //Check and encode for letters N-Z
            encodeStr += String.fromCharCode(str.charCodeAt(i) - 13);
        }
    }

    return encodeStr;
}