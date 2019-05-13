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

hotelRouter.get('/hotels/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const hotel = await Hotel.findByPk(id)
  
      if (!hotel) throw Error('Restaurant not found');
  
      response.json({
        hotel
      })
    } catch (e) {
      response.status(404).json({ msg: e.message })
    }
  })

module.exports = hotelRouter