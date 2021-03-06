require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose') 

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true} )
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//middleware
app.use(express.json())

//route setup
const parentsRouter = require('./routes/parents')
app.use('/parents', parentsRouter)
'localhost:3000/parents'


app.listen(3000, () => console.log('Server Started'))
