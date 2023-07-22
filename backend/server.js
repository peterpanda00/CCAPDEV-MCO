require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const bookingRoutes = require('./routes/bookings')
// express app
const app = express()

// middleware
app.use(express.json())


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})



// routes
app.use('/api/bookings/',bookingRoutes)
app.get('/')


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
  app.listen(process.env.PORT, () => {
  console.log('Connected to Database and Listening on port', process.env.PORT)
})

  })
  .catch((error) => {
     console.log(error )
  })




