import * as express from "express";
import {findWord} from "./scrabbleResolver";
import * as cors from "cors";
declare var require: any;
const dico = require('./dico.json');
const app = express();

// @ts-ignore
const myDico: string[] = Object.keys(dico).map( key => dico[key]);

app.use(cors());

app.get('/find', (req, res) => {
    const hand: any = req.query.hand;
    const words = findWord(myDico, hand);
    res.json({words});
});

app.listen(8080, () => {
    console.log('Server listen on port: 8080');
})