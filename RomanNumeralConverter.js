/*
Convert a given number into a roman numeral.

All roman numeral answers should be provided in upper-case.
*/
function romanNumeral(num) {
    //Convert parameter to array of string digits
    var numArr = num.toString().split("");
    var romanNumeral = "";
    var thousandsNum = "";
    
    //Check if number has thousands place or greater
    if (numArr.length >= 4) {
        //Loop to get number of thousands
        for(var i = 0; i < numArr.length - 3; i++) {
            thousandsNum += numArr[i];
        }
    }
    romanNumeral = "M".repeat(thousandsNum);
    return romanNumeral;
}