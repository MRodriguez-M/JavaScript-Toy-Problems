/*
Return true if the given string is a palindrome. Otherwise, return false.

Remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/
function palindrome(str) {
  //Create reverse string to compare against original
  var reverseStr = str.split("").reverse().join("");

  //Compare original and reversed strings
  if (str == reverseStr) {
    return true;
  } else {
    return false;
  }
}