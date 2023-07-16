/*
Return true if the given string is a palindrome. Otherwise, return false.

Remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

const palindromeChecker = (str) => {
    //Create new version of original string with no punctuation, spaces, or symbols
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    //Create reverse string to compare against clean version of original string
    let reverseStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").reverse().join("");

    //Compare original and reversed strings
    if(cleanStr == reverseStr) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = palindromeChecker;