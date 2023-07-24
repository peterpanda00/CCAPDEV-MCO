require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const bookingRoutes = require('./routes/bookings')
const contactRoutes = require('./routes/contacts')
const usersRoutes = require('./routes/users')
const reviewsRoutes = require('./routes/reviews')
const roomRoutes = require('./routes/rooms')
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
app.use('/api/contacts/',contactRoutes)
app.use('/api/users/',usersRoutes)
app.use('/api/reviews/',reviewsRoutes)
app.use('/api/rooms/',roomRoutes)
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




