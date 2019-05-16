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

barRouter.get('/bars/:id', async (req, res) => {
  try {
    const onebar = await Bar.findByPk(req.params.id)
    res.json(onebar)
  } catch (error) {
    res.json({ msg: error.status })
  }
});

barRouter.post('/bars', async (req, res) => {
  try {
    const createBar = await Bar.create(req.body)
    res.send({
      createBar
    })
    console.log(`Bar created`, createBar)
  } catch (e) {
    res.status(500).json({ msg: e.message })
  }
})

barRouter.put('/bars/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const bar = await Bar.findByPk(id);

    if (bar) await Bar.update(req.body);
    res.json({
      bar
    });
    console.log(`Bar updated`, bar)
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
  }
})

// barRouter.get('/:id', async (req, res) => {
//   try {
//     const bar = await Bar.findByPk(req.params.id)
//     res.json(bar)
//   } catch (error) {
//     res.json({ msg: error.status })
//   }
// });

module.exports = barRouter