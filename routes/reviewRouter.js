const express = require('express');
const { Review } = require('../models');
const reviewRouter = express.Router();

  
reviewRouter.get('/reviews', async (req, res) => {
    try {
        const allreviews = await Review.findAll()
        res.send(allreviews)
    } catch (error) {
        res.json({ msg: error.status })
    }
});

reviewRouter.get('/reviews/:id', async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id)
        res.send(review)
    } catch (error) {
        res.json({ msg: error.status })
    }
});

reviewRouter.post('/reviews', async (req, res) => {
    try {
      const createReview = await Review.create(request.body)
      res.send({
        createReview
      })
      console.log( `review created`, createReview)
    } catch (e) {
      res.status(500).json({ msg: e.message })
    }
  })

reviewRouter.delete('/reviews/:id', async (req, res) => {
    try {
      const deletion = await Review.findByPk(req.params.id);
      await deletion.destroy();
      res.send(deletion);
    } catch (e) {
      console.log(e.message);
    }
  });

module.exports = reviewRouter