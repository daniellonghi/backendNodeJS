// REQUIRES
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// STARTING APP
const app = express();
app.use(express.json());
app.use(cors());

// STATING DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);
requireDir('./src/models');

//FIRST ROUTE - WILDCARD ('/'). RECEBE TODAS AS ROTAS
app.use('/api', require('./src/routes'));

// STARTING LISTEN
app.listen(3001);