"use strict";
exports.__esModule = true;
var scrabbleResolver_1 = require("./scrabbleResolver");
var dico = ["easy", "lazy", "noob", "troll"];
var scrabbleHand = "ndfsaofwobdfas";
var x = scrabbleResolver_1.findWord(dico, scrabbleHand);
console.log(x);
