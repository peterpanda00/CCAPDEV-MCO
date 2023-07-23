const Booking = require('../models/bookingModel')
const mongoose = require('mongoose')

//Get all bookings
const getBookings = async(req,res)=>{
    const bookings = await Booking.find({}).sort({createdAt: -1})
    res.status(200).json(bookings)
}   


//Get a single booking
const getBooking = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such booking'})

    }
    const booking = await Booking.findById(id)

    if(!booking){
        return res.status(404).json({error:'No such booking'})
    }

    res.status(200).json(booking)

}


//Create New Booking
const createBooking = async(req,res) => {

    const {check_in_date,check_out_date,room_type,num_of_guests,firstName,
        lastName,contactNumber,emailAddress,specialRequest,paymentMethod} = req.body
    
    // Add document to database
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
}

//Delete a Booking
const deleteBooking = async (req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such booking'})

    }

    const booking = await Booking.findOneAndDelete({_id: id})

    if(!booking){
        return res.status(404).json({error:'No such booking'})
    }

    res.status(200).json(booking)

}


//Update Booking
const updateBooking = async(req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such booking'})

    }

    const booking = await Booking.findOneAndUpdate({_id : id},{
        ...req.body

        })
    
    if(!booking){
        return res.status(404).json({error:'No such booking'})
    }

    res.status(200).json(booking)


}


module.exports = {

    getBookings,
    getBooking,
    createBooking,
    deleteBooking,
    updateBooking
}