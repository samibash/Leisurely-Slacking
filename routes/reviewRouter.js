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

reviewRouter.get('/reviews/:id', async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id)
        res.json(review)
    } catch (error) {
        res.json({ msg: error.status })
    }
});

reviewRouter.post('/', async (request, response) => {
    try {
      const review = await Review.create(request.body)
      response.json({
        review
      })
    } catch (e) {
      response.status(500).json({ msg: e.message })
    }
  })

module.exports = reviewRouter