const romanNumeralConvertor = require('./RomanNumeralConverter');

describe("Roman Numeral Convertor", () => {
    test("2 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(2);

        expect(result).toBe("II");
    });

    test("12 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(12);

        expect(result).toBe("XII");
    });

    test("29 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(29);

        expect(result).toBe("XXIX");
    });

    test("45 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(45);

        expect(result).toBe("XLV");
    });

    test("83 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(83);

        expect(result).toBe("LXXXIII");
    });

    test("99 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(99);

        expect(result).toBe("XCIX");
    });

    test("100 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(100);

        expect(result).toBe("C");
    });

    test("200 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(200);

        expect(result).toBe("CC");
    });

    test("331 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(331);

        expect(result).toBe("CCCXXXI");
    });

    test("400 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(400);

        expect(result).toBe("CD");
    });

    test("564 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(564);

        expect(result).toBe("DLXIV");
    });

    test("656 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(656);

        expect(result).toBe("DCLVI");
    });

    test("798 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(798);

        expect(result).toBe("DCCXCVIII");
    });

    test("877 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(877);

        expect(result).toBe("DCCCLXXVII");
    });

    test("1023 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(1023);

        expect(result).toBe("MXXIII");
    });

    test("3999 returns correct roman numeral", () => {
        let result = romanNumeralConvertor(3999);

        expect(result).toBe("MMMCMXCIX");
    });
})