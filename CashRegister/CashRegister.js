/*
Design a cash register drawer function that accepts purchase price (price), payment (cash), and cash-in-drawer (cid).

cid is a 2D array listing available currency.

The function should return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

const cashRegister = (price, cash, cid) => {
    const transaction = {status: "", change: []};
    let changeDue = cash - price;
    let cidTotal = 0;
    let amount = 0;
    //Template for values of each type of currency
    const currency = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    //Add all cid values to determine status when compared to change due
    for(let i = 0; i < cid.length; i++) {
        cidTotal += cid[i][1];
    }

    //Check for closed status if change due and cid total are the same
    if(changeDue == cidTotal) {
        transaction.status = "CLOSED";
        transaction.change = cid;
    }
    //Check for 1 insufficient funds status if cid total is less than change due
    else if(cidTotal < changeDue) {
        transaction.status = "INSUFFICIENT_FUNDS";
    }
    else {
        //Loop through cid to manage change
        for(let i = cid.length-1; i >= 0; i--) {
            //Provide available change if currency type can be broken into change due
            if(changeDue.toFixed(2) >= currency[cid[i][0]]) {
                amount = Math.floor(changeDue.toFixed(2) / currency[cid[i][0]]);
                amount *= currency[cid[i][0]];
                if(amount > cid[i][1]) {
                    amount = cid[i][1];
                    changeDue = changeDue.toFixed(2) - amount;
                }
                else {
                    changeDue = changeDue.toFixed(2) - amount;
                }

                transaction.change.push([cid[i][0], amount]);
            }

            //End loop early if exact change due has been managed
            if(changeDue == 0) {
                transaction.status = "OPEN";
                break;
            }
        }

        //Check for other insufficient funds status if cid available could not give exact change due
        if(changeDue > 0) {
            transaction.status = "INSUFFICIENT_FUNDS";
            transaction.change = [];
        }
    }

    return console.log(transaction);
}

//cashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//cashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//cashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//cashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//cashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);