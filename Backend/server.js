"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var StringCalculator_1 = require("./StringCalculator"); // Adjust path as needed
var app = express();
app.use(express.json());
app.use(cors());
app.post('/calculate', function (req, res) {
    var numbers = req.body.numbers;
    try {
        var result = (0, StringCalculator_1.add)(numbers);
        res.json({ result: result });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
