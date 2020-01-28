const express = require('express');
const router = express.Router();
const jsonObj = require("../../resources/choices.json");
const rand = require('../modules/randomnum.js');

router.get('/', (req, res, next) => {
    rand.getRandomNumber().then(function(number) {

        //grabs a number 1-100
        const randomNumber = number.random_number;
        //convers it to an int 0-4
        const randomChoice = randomNumber % 5;
        //gets random choice
        const result = jsonObj[randomChoice];
        console.log(randomChoice);
        console.log(result);
        res.status(200).json(
            result
        );

    }).catch(function(err) {
        res.status(500).json({
            message: "Something went wrong."
        });
    })
});

module.exports = router;