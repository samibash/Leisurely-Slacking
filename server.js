const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const {Hotel, Destination, Bar, Review  } = require('./models');
const app = express();

const PORT = process.env.PORT || 3005

// middleware below

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// route setup below

app.get('/', async (req, response) => {
    try {
      response.json({
        msg: 'Welcome to Restaurant Application'
      })
    } catch (e) {
      response.status(500).json({ msg: e.status })
    }
  });