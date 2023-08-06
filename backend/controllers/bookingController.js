const Booking = require('../models/bookingModel')
const Room = require('../models/roomModel');
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

{/*

//Create New Booking
const createBooking = async(req,res) => {

    const {check_in_date,check_out_date,room,num_of_guests,firstName,
        lastName,contactNumber,emailAddress,specialRequest,paymentMethod} = req.body
    
    // Add document to database
    try{
        const booking = await Booking.create({check_in_date,
                                            check_out_date,
                                            room,
                                            num_of_guests,
                                            firstName,
                                            lastName,
                                            contactNumber,
                                            emailAddress,
                                            specialRequest,
                                            paymentMethod})
  
        const bookedRoom = await Room.findById(room);
        bookedRoom.roomNumbers.forEach((roomNumber) => {
        roomNumber.unavailableDates.push(
            new Date(check_in_date),
            new Date(check_out_date)
        );
        });

        await bookedRoom.save();

        
        await bookedRoom.save();
        res.status(200).json(booking)

    }catch(error){
        res.status(400).json({error:error.message})

    }
}

*/}

const createBooking = async (req, res) => {
    const {
      check_in_date,
      check_out_date,
      room,
      num_of_guests,
      firstName,
      lastName,
      contactNumber,
      emailAddress,
      specialRequest,
      paymentMethod,
    } = req.body;
  
    try {
      
      const bookedRoom = await Room.findById(room);
  
 
      const availableRoomNumber = bookedRoom.roomNumbers.find((roomNumber) => {
        const unavailableDates = roomNumber.unavailableDates;
        return (
          unavailableDates.every(
            (unavailableDate) =>
              new Date(check_in_date) >= unavailableDate ||
              new Date(check_out_date) <= unavailableDate
          )
        );
      });
  
      if (!availableRoomNumber) {
        return res.status(400).json({ error: 'No available rooms for selected dates.' });
      }
  
  
      const booking = await Booking.create({
        check_in_date,
        check_out_date,
        room,
        num_of_guests,
        firstName,
        lastName,
        contactNumber,
        emailAddress,
        specialRequest,
        paymentMethod,
      });
  
     
      availableRoomNumber.unavailableDates.push(
        new Date(check_in_date),
        new Date(check_out_date)
      );
  
    
      await bookedRoom.save();
  
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Error creating booking.' });
    }
  };


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