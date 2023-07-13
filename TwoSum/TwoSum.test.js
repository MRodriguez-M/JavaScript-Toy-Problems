const twoSum = require('./TwoSum');

describe("Two Sum Tests", () => {
    test("Return array of two indices", () => {
        let result = twoSum([2, 7, 11, 15], 9);

        expect(result).toStrictEqual([0, 1]);
    });
})