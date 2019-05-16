const express = require('express');
const { Destination , Review} = require('../models');
const destinationRouter = express.Router();

destinationRouter.get('/', async (request, response) => {
  try {
    const destinations = await Destination.findAll({
      include: [ Review ]
    });
    response.json({destinations})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

module.exports = destinationRouter