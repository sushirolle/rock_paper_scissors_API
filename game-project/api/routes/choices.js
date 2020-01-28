const express = require('express');
const router = express.Router();
const jsonObj = require("../../resources/choices.json");

router.get('/', (req, res, next) => {
    res.status(200).json(
        jsonObj
    );
});

module.exports = router;
