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