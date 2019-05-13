const express = require('express');
const { Review } = require('../models');
const reviewRouter = express.Router();

  
reviewRouter.get('/reviews', async (req, res) => {
    try {
        const allreviews = await Review.findAll()
        res.json(allreviews)
    } catch (error) {
        res.json({ msg: error.status })
    }
});

module.exports = reviewRouter