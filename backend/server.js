const { generateUploadURL } = require('./s3.js');

const cors = require('cors')
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const bookingRoutes = require('./routes/bookings')
const contactRoutes = require('./routes/contacts')
const usersRoutes = require('./routes/users')
const reviewsRoutes = require('./routes/reviews')
const roomRoutes = require('./routes/rooms')
const loginRoutes = require('./routes/login')
const signupRoutes= require('./routes/signup')



// express app
const app = express()

// middleware
app.use(express.json())

// cors 
app.use(cors({
  origin:'http://localhost:3000',
  credentials: true
}));


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
  console.log({url})
})


// routes
app.use('/api/bookings/',bookingRoutes)
app.use('/api/contacts/',contactRoutes)
app.use('/api/users/',usersRoutes)
app.use('/api/reviews/',reviewsRoutes)
app.use('/api/login/', loginRoutes);
app.use('/api/signup/', signupRoutes);
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




