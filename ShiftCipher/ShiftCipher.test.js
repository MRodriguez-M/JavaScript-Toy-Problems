const shiftCipher = require('./ShiftCipher');

describe("Shift Cipher", () => {
    test("Cipher string returns correct phrase", () => {
        let result = shiftCipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

        expect(result).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
    });
})