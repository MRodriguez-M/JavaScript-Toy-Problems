/*
Return the indices of two values within an array of integers whose sum equal a target number
*/

const twoSum = (numArr, num) => {
    let intArr = numArr;
    let targetNum = num;
    let indexArr = [];

    for(let i = 0; i < intArr.length; i++) {
        for(let j = i+1; j < intArr.length; j++) {
            if(intArr[i] + intArr[j] == targetNum) {
                indexArr.push(i, j);
                break;
            }
        }
    }

    return indexArr;
}

console.log(twoSum([2, 7, 11, 15], 9));