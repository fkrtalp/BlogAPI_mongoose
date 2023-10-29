"use strict"
/*EXPRESSJS MONGOOSE BLOG API PROJECT*/ 

const express = require('express');
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 8000

app.use(express.json())

require('./src/dbConnection')


// HomePage:
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})

app.use(require('./src/errorHandler'))

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))