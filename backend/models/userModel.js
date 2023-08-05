const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({ 
    userName: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
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
    }
    
})


module.exports = mongoose.model('User', userSchema)

//User.find()