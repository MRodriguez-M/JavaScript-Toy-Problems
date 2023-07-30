/*
Convert a given number into a roman numeral.

All roman numeral answers should be provided in upper-case.
*/

const romanNumeralConvertor = (num) => {
    //Convert number to array of string digits
    let numArr = num.toString().split("");
    let romanNumeral = "";
    let thousandsNum = "";

    //Check if number has thousands place or greater and use loop to get number if it exists
    if(numArr.length >= 4) {
        for(let i = 0; i < numArr.length - 3; i++) {
            thousandsNum += numArr[i];
        }
    }
    romanNumeral += "M".repeat(thousandsNum);

    //Switch cases to assign roman numeral value based on hundreds place digit
    switch(numArr[numArr.length - 3]) {
        case "1":
            romanNumeral += "C";
            break;
        case "2":
            romanNumeral += "CC"
            break;
        case "3":
            romanNumeral += "CCC";
            break;
        case "4":
            romanNumeral += "CD";
            break;
        case "5":
            romanNumeral += "D";
            break;
        case "6":
            romanNumeral += "DC";
            break;
        case "7":
            romanNumeral += "DCC";
            break;
        case "8":
            romanNumeral += "DCCC";
            break;
        case "9":
            romanNumeral += "CM";
            break;
        default:
            break;
    }

    //Switch cases to assign roman numeral value based on tens place digit
    switch(numArr[numArr.length - 2]) {
        case "1":
            romanNumeral += "X";
            break;
        case "2":
            romanNumeral += "XX"
            break;
        case "3":
            romanNumeral += "XXX";
            break;
        case "4":
            romanNumeral += "XL";
            break;
        case "5":
            romanNumeral += "L";
            break;
        case "6":
            romanNumeral += "LX";
            break;
        case "7":
            romanNumeral += "LXX";
            break;
        case "8":
            romanNumeral += "LXXX";
            break;
        case "9":
            romanNumeral += "XC";
            break;
        default:
            break;
    }

    //Switch cases to assign roman numeral value based on ones place digit
    switch(numArr[numArr.length - 1]) {
        case "1":
            romanNumeral += "I";
            break;
        case "2":
            romanNumeral += "II"
            break;
        case "3":
            romanNumeral += "III";
            break;
        case "4":
            romanNumeral += "IV";
            break;
        case "5":
            romanNumeral += "V";
            break;
        case "6":
            romanNumeral += "VI";
            break;
        case "7":
            romanNumeral += "VII";
            break;
        case "8":
            romanNumeral += "VIII";
            break;
        case "9":
            romanNumeral += "IX";
            break;
        default:
            break;
    }

    return romanNumeral;
}

module.exports = romanNumeralConvertor;