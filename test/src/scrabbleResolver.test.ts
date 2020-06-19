import {compare, findWord, WordData, wordDataFactory} from "../../src/scrabbleResolver";

describe("wordDataFactory function", () => {

    it("should return wordData", () => {
        const value: string = "mot";
        const expected: WordData = { value: "mot", composition: {m: 1, o: 1, t: 1 }};

        expect(wordDataFactory(value)).toStrictEqual(expected);
    });
});

describe("compare function", () => {
    it("should return false", () => {
        const scrabbleHand: WordData = { value: "abcd", composition: {a: 1, b: 1, c: 1, d:1}};
        const wordTest: WordData = { value: "mot", composition: {m: 1, o: 1, t: 1 }};

        expect(compare(scrabbleHand, wordTest)).toBe(false);
    });

    it("should return true", () => {
        const scrabbleHand: WordData = { value: "motd", composition: {m: 1, o: 1, t: 1, d:1}};
        const wordTest: WordData = { value: "mot", composition: {m: 1, o: 1, t: 1 }};

        expect(compare(scrabbleHand, wordTest)).toBe(true);
    });
});

describe("findWord function", () => {
    const scrabbleHand: string = "easyjkwleofz";
    const dico: string[] = ["easy", "hard", "lazy"];
    const expectedResult: string[] = ["easy", "lazy"];

    it("should return word found", () => {
        expect(findWord(dico, scrabbleHand)).toStrictEqual(expectedResult);
   });
});




