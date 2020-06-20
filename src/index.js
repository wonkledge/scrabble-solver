"use strict";
exports.__esModule = true;
var express = require("express");
var scrabbleResolver_1 = require("./scrabbleResolver");
var cors = require("cors");
var dico = require('./dico.json');
var app = express();
// @ts-ignore
var myDico = Object.keys(dico).map(function (key) { return dico[key]; });
app.use(cors());
app.get('/find', function (req, res) {
    var hand = req.query.hand;
    var words = scrabbleResolver_1.findWord(myDico, hand);
    res.json({ words: words });
});
app.listen(8080, function () {
    console.log('Server listen on port: 8080');
});
