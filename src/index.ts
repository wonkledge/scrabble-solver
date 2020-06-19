import {findWord} from "./scrabbleResolver";

const dico = ["easy", "lazy", "noob", "troll"];
const scrabbleHand = "ndfsaofwobdfas";

const x = findWord(dico, scrabbleHand);

console.log(x);