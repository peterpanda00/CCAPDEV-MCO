const express = require('express')
const Booking = require('../models/bookingModel')

const router = express.Router()

// GET all bookings
router.get('/', (req,res) => {
    res.json({mssg:'GET all bookings'})
})

// GET single booking
router.get('/:id', (req,res) => {
    res.json({mssg:'GET a single booking'})
})

// POST a new booking
router.post('/', async (req, res)=> {
    const {check_in_date,check_out_date,room_type,num_of_guests,firstName,
        lastName,contactNumber,emailAddress,specialRequest,paymentMethod} = req.body
    try{
        const booking = await Booking.create({check_in_date,
                                            check_out_date,
                                            room_type,
                                            num_of_guests,
                                            firstName,
                                            lastName,
                                            contactNumber,
                                            emailAddress,
                                            specialRequest,
                                            paymentMethod})
        res.status(200).json(booking)

    }catch(error){
        res.status(400).json({error:error.message})

    }


})

// DELETE a booking
router.delete('/:id', (req, res)=> {
    res.json({mssg : 'DELETE a booking'})

})

// UPDATE a booking
router.patch('/:id', (req, res)=> {
    res.json({mssg : 'UPDATE a booking'})

})

module.exports = router

