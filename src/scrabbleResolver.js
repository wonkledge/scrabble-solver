"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.findWord = exports.compare = exports.wordDataFactory = void 0;
exports.wordDataFactory = function (value) {
    var word = { value: value, composition: {} };
    return value.split('').reduce(function (wordData, letter) {
        var _a, _b;
        if (wordData.composition[letter])
            return __assign(__assign({}, wordData), { composition: __assign(__assign({}, wordData.composition), (_a = {}, _a[letter] = wordData.composition[letter] + 1, _a)) });
        return __assign(__assign({}, wordData), { composition: __assign(__assign({}, wordData.composition), (_b = {}, _b[letter] = 1, _b)) });
    }, word);
};
exports.compare = function (scrabbleHand, wordTest) {
    return Object.keys(wordTest.composition).reduce(function (isIncluded, letter) {
        return isIncluded && scrabbleHand.composition.hasOwnProperty(letter) && scrabbleHand.composition[letter] >= wordTest.composition[letter];
    }, true);
};
exports.findWord = function (dico, scrabbleHand) {
    var sh = exports.wordDataFactory(scrabbleHand);
    return dico.reduce(function (wordsData, word) {
        var w = exports.wordDataFactory(word);
        if (exports.compare(sh, w)) {
            return __spreadArrays(wordsData, [w]);
        }
        return wordsData;
    }, []).map(function (word) { return word.value; });
};
