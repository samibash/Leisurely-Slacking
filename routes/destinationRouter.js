const express = require('express');
const { Destination } = require('../models');
const destinationRouter = express.Router();

destinationRouter.get('/', async (req, res) => {
    try {
      res.json({
        msg: 'Welcome To Our Destination Travel Application'
      })
    } catch (error) {
      res.status(500).json({ msg: error.status })
    }
  });
  
  destinationRouter.get('/destinations', async (req, res) => {
    try {
        const allDestinations = await Destination.findAll()
      res.json(allDestinations)
    } catch (error) {
      res.json({ msg: error.status })
    }
  });

  destinationRouter.get('/destinations/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const destination = await Destination.findByPk(id)
  
      if (!destination) throw Error('Restaurant not found');
  
      response.json({
        destination
      })
    } catch (e) {
      response.status(404).json({ msg: e.message })
    }
  })

  module.exports = destinationRouter