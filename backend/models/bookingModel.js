const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    check_in_date: {
        type: Date,
        required:true
    },
    check_out_date: {
        type: Date,
        required:true
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
      },
    num_of_guests: {
        type: Number,
        required:true
    },
    firstName: {
        type: String, 
        required: true
    }, 
    lastName: {
        type: String, 
        required: true
    }, 
    contactNumber: {
        type: Number, 
        required: true
    },
    emailAddress: {
        type: String, 
        required: true
    },
    specialRequest:{
        type: String, 
        required: false
    },
    paymentMethod: {
        type: String, 
        required: true
    }
}, {timestamps:true})

module.exports = mongoose.model('Booking', bookingSchema)

//Booking.find()