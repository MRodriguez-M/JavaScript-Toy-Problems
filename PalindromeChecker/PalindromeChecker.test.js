const palindromeChecker = require('./PalindromeChecker');

describe("Palindrome Checker Tests", () => {
    test("Return value should be a boolean", () => {
        let result = palindromeChecker("eye");
    });

    test("Palindrome string returns true", () => {
        let result = palindromeChecker("eye");
    });

    test("Palindrome string with non-alphanumeric characters returns true", () => {
        let result = palindromeChecker("A man, a plan, a canal. Panama");
    });

    test("Non-palindrome string returns false", () => {
        let result = palindromeChecker("not a palindrome");
    });
})