const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const rand = require('../modules/randomnum.js');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

// 1 = rock WINS AGAINST (3, 4) LOSES AGAINST (2, 5)
// 2 = paper WINS AGAINST (1, 5) LOSES AGAINST (3, 4)
// 3 = scissors WINS AGAINST (2, 4) LOSES AGAINST (1, 5)
// 4 = lizard WINS AGAINST (5, 2) LOSES AGAINST (1, 3)
// 5 = spock WINS AGAINST (1, 3) LOSES AGAINST (2, 4)

const winnerDictionary = {};
winnerDictionary[1] = [3, 4];
winnerDictionary[2] = [1, 5];
winnerDictionary[3] = [2, 4];
winnerDictionary[4] = [5, 2];
winnerDictionary[5] = [1, 3];


//given two variables, check if the computer or player wins
function checkWinner(computer, player) {
    if (computer == player)
        return 'tie';

    var winningChoices = winnerDictionary[player];

    if (winningChoices.includes(computer)) {
        return 'win';
    } else {
        return 'lose';
    }
}

router.post('/', (req, res, next) => {

    var body = req.body.player;

    rand.getRandomNumber().then(function(number) {

            //get player choice and grab a random number
            var playerChoice = body;
            var randomNumber = number.random_number;
            //convert random number to a player option
            var computerChoice = randomNumber % 5 + 1;

            //check who wins the game
            var gameResult = checkWinner(computerChoice, playerChoice);

            //return the result
            res.status(200).json({
                results: gameResult,
                player: playerChoice,
                computer: computerChoice
            });
        })
        .catch(function(err) {
            //if the player didn't input a number or inputted a number that is too large (greater than 5)
            res.status(500).json({
                message: "Something went wrong. Please select another choice!"
            });
        })
});

module.exports = router;