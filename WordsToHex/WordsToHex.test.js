const wordsToHex = require('./WordsToHex');

describe("Words To Hex Tests", () => {
    test("Return value is of type array", () => {
        let result = wordsToHex("The worst enemy to creativity is self-doubt");

        expect(result).toEqual(expect.any(Array));
    });

    test("Hex strings should be in correct format", () => {
        let result = wordsToHex("The worst enemy");

        expect(result[0]).toMatch(/^#\w{6}$/);
    });

    test("Strings in hex array are converted correctly", () => {
        let result = wordsToHex("The worst enemy to creativity is self-doubt");

        expect(result).toEqual(["#546865", "#776f72", "#656e65", "#746f00", "#637265", "#697300", "#73656c"]);
    });

    test("Strings with less than 3 characters converted in correct format", () => {
        let result = wordsToHex("I me");

        expect(result[0]).toMatch(/^#\w{2}0{4}$/);
        expect(result[1]).toMatch(/^#\w{4}0{2}$/);
    });
})