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

  // destinationRouter.get('/destinations/:id', async (request, response) => {
  //   try {
  //     const id = request.params.id;
  //     const destination = await Destination.findByPk(id)
  
  //     if (!destination) throw Error('Restaurant not found');
  
  //     response.json({
  //       destination
  //     })
  //   } catch (e) {
  //     response.status(404).json({ msg: e.message })
  //   }
  // })

  module.exports = destinationRouter