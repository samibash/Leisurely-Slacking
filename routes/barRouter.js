const express = require('express');
const { Bar } = require('../models');
const barRouter = express.Router();

barRouter.get('/', async (req, res) => {
  try {
    const allbars = await Bar.findAll()
    res.json(allbars)
  } catch (error) {
    res.json({ msg: error.status })
  }
});

barRouter.get('/:id', async (req, res) => {
  try {
    const onebar = await Bar.findByPk(req.params.id)
    res.json(onebar)
  } catch (error) {
    res.json({ msg: error.status })
  }
});

barRouter.post('/', async (req, res) => {
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

barRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const bars = await Bar.findByPk(id);
    console.log(req.body);
    if (bars) await Bar.update(req.body, { where: { id }});
    console.log(`Bar updated`, bar)
    res.json({
      bars
    });   
  } catch(e) {
    console.log(e);
    res.status(500).json({
      message: e.message
    });
  }
})

module.exports = barRouter