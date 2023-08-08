const cashRegister = require("./CashRegister");

describe("Cash Register", () => {
    test("Function returns an object", () => {
        let result = cashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

        expect(result).toEqual(expect.any(Object));
    });

    test("Function returns OPEN status object with correct change", () => {
        let result = cashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

        expect(result).toEqual({status: "OPEN", change: [["QUARTER", 0.5]]});
    });

    test("Function returns INSUFFICIENT FUNDS status object with empty change array", () => {
        let result = cashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

        expect(result).toEqual({status: "INSUFFICIENT_FUNDS", change: []});
    });

    test("Function returns INSUFFICIENT FUNDS status object with empty change array", () => {
        let result = cashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

        expect(result).toEqual({status: "INSUFFICIENT_FUNDS", change: []});
    });

    test("Function returns CLOSED status object with cid as change array", () => {
        let result = cashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

        expect(result).toEqual({status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]});
    });
})