/*
Design a cash register drawer function that accepts purchase price (price), payment (cash), and cash-in-drawer (cid).

cid is a 2D array listing available currency.

The function should return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

const cashRegister = (price, cash, cid) => {
    return price;
}