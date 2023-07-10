const stringToFixedLengthParagrapgh = require('./StringToFixedLengthParagraph');

describe("String to Fixed Length Paragraph Tests", () => {
    /*test("Split string by max character per line", () => {
        let result = stringToFixedLengthParagrapgh("The worst enemy to creativity is self-doubt.", 8);

        expect(result).toBe("ERROR: print exceeds max length.");
    });*/

    test("Throw error when max length exceeded", () => {
        expect(() => stringToFixedLengthParagrapgh("The worst enemy to creativity is self-doubt.", 4)).toThrow("worst exceeds max length.");
    });
})