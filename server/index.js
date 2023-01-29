const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')

const authRoutes = require('./routes/auth')

const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api',authRoutes);

const port = process.env.PORT || 8080;

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DATABASE,{ useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(result => {
    console.log("connected to port 8080");
    app.listen(port);
  })
  .catch(err => console.log(err));
