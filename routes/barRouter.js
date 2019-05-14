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

// barRouter.get('/:id', async (req, res) => {
//   try {
//     const bar = await Bar.findByPk(req.params.id)
//     res.json(bar)
//   } catch (error) {
//     res.json({ msg: error.status })
//   }
// });

module.exports = barRouter