const express = require('express');
const router = express.Router();

//basic welcome message to get you started
router.get('/', (req, res, next) => {  
    res.status(200).json(
        {
        message: 'Welcome to Rock, Paper, Scissors, Lizard, Spock!'
        }
    );
});

module.exports = router;
