const telephoneNumberValidator = require('./TelephoneNumberValidator');

describe("Telephone Number Validator", () => {
    test("String returns a boolean", () => {
        let result = telephoneNumberValidator("555-555-5555");

        expect(result).toEqual(expect.any(Boolean));
    });

    test("11-digit string returns true", () => {
        let result = telephoneNumberValidator("1 555-555-5555");

        expect(result).toBeTruthy();
    });

    test("10-digit string returns true", () => {
        let result = telephoneNumberValidator("(555)-555-5555");

        expect(result).toBeTruthy();
    });

    test("7-digit string returns false", () => {
        let result = telephoneNumberValidator("5555555");

        expect(result).toBeFalsy();
    });

    test("String with letter characters returns false", () => {
        let result = telephoneNumberValidator("123**&!!asdf#");

        expect(result).toBeFalsy();
    });

    test("String with missing parenthesis returns false", () => {
        let result = telephoneNumberValidator("1 555)555-5555");

        expect(result).toBeFalsy();
    });

    test("String with incorrect first digit returns false", () => {
        let result = telephoneNumberValidator("-1 (757) 622-7382");

        expect(result).toBeFalsy();
    });

    test("String with incorrect dash placement returns false", () => {
        let result = telephoneNumberValidator("55 55-55-555-5");

        expect(result).toBeFalsy();
    });
})