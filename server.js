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

app.get('/', async (req, res) => {
    try {
      res.json({
        msg: 'Welcome To Our Destination Travel Application'
      })
    } catch (error) {
      res.status(500).json({ msg: error.status })
    }
  });


//   server below

app.listen(PORT, () => console.log(`Destination app listening on port ${PORT}!`))
