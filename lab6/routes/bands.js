const express = require('express');
const router = express.Router();
const data = require('../data');
const bandData = data.bands;
const albumData = data.albums;

router.post('/', async (req, res) => {
    try {
        const bandList = await bandData.getAllBands();
        res.json(bandList);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
