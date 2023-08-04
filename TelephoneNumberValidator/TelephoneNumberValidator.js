/*
Return true if the passed string looks like a valid US phone number.

The following are examples of valid formats for US numbers:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1(555)555-5555
*/

const telephoneNumberValidator = (str) => {
    let numStr = str.replaceAll(" ", "");
    let numRegex = /^1?(\(\d{3}\)|\d{3})[\-]?\d{3}[\-]?\d{4}$/;
    let numCheck = numStr.match(numRegex);

    if(numCheck != null) {
        return true;
    }
    else {
        return false;
    }
    //return result;
}

console.log(telephoneNumberValidator("1 (555)-555 55k55"));