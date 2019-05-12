const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const {Hotel, Destination, Bar, Review  } = require('./models');
const app = express();

const PORT = process.env.PORT || 3005

