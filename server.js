const express = require('express')
const app = express()
const mongoose = require('mongoose')

require("./server/config/mongoose.config");


const Jokes = require('./server/models/jokeModel');
const AllRoutes = require("./server/routes/jokesRoutes")
AllRoutes(app)



mongoose.connect('')
const port = 8000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port)

