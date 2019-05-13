const express = require('express');
const { Hotel, Review } = require('../models');
const hotelRouter = express.Router();

hotelRouter.get('/hotels', async (request, response) => {
    try {
      const allHotels = await Hotel.findAll({
        include: [ Review ]
      });
      response.json({
        allHotels
      })
    } catch (e) {
      response.status(500).json({ msg: e.message })
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
  });
  

module.exports = hotelRouter