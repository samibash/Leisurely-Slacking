const express = require('express');
const { Bar } = require('../models');
const barRouter = express.Router();

  
  barRouter.get('/bars', async (req, res) => {
    try {
        const allbars = await Bar.findAll()
      res.json(allbars)
    } catch (error) {
      res.json({ msg: error.status })
    }
  });

  module.exports = barRouter