"use strict";
exports.__esModule = true;
var scrabbleResolver_1 = require("../../src/scrabbleResolver");
describe("wordDataFactory function", function () {
    it("should return wordData", function () {
        var value = "mot";
        var expected = { value: "mot", composition: { m: 1, o: 1, t: 1 } };
        expect(scrabbleResolver_1.wordDataFactory(value)).toStrictEqual(expected);
    });
});
describe("compare function", function () {
    it("should return false", function () {
        var scrabbleHand = { value: "abcd", composition: { a: 1, b: 1, c: 1, d: 1 } };
        var wordTest = { value: "mot", composition: { m: 1, o: 1, t: 1 } };
        expect(scrabbleResolver_1.compare(scrabbleHand, wordTest)).toBe(false);
    });
    it("should return true", function () {
        var scrabbleHand = { value: "motd", composition: { m: 1, o: 1, t: 1, d: 1 } };
        var wordTest = { value: "mot", composition: { m: 1, o: 1, t: 1 } };
        expect(scrabbleResolver_1.compare(scrabbleHand, wordTest)).toBe(true);
    });
});
describe("findWord function", function () {
    var scrabbleHand = "easyjkwleofz";
    var dico = ["easy", "hard", "lazy"];
    var expectedResult = ["easy", "lazy"];
    it("should return word found", function () {
        expect(scrabbleResolver_1.findWord(dico, scrabbleHand)).toStrictEqual(expectedResult);
    });
});
