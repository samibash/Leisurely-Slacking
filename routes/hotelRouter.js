const express = require('express');
const { Hotel } = require('../models');
const hotelRouter = express.Router();

  
hotelRouter.get('/hotels', async (req, res) => {
    try {
        const allHotels = await Hotel.findAll()
        res.json(allHotels)
    } catch (error) {
        res.json({ msg: error.status })
    }
});

module.exports = hotelRouter