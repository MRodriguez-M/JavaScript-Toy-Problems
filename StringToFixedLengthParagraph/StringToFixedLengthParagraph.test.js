const stringToFixedLengthParagrapgh = require('./StringToFixedLengthParagraph');

describe("String to Fixed Length Paragraph Tests", () => {
    test("Split string by max character per line", () => {
        let result = stringToFixedLengthParagrapgh("The worst enemy to creativity is self-doubt.", 15);

        expect(result).toBe("The worst enemy \nto creativity \nis self-doubt. ");
    });

    test("Throw error when max length exceeded", () => {
        expect(() => stringToFixedLengthParagrapgh("The worst enemy to creativity is self-doubt.", 4)).toThrow("worst exceeds max length.");
    });
})