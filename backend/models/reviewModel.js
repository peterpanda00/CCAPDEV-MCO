const mongoose = require('mongoose')

const Schema = mongoose.Schema


const reviewSchema = new Schema({
    userName: { type: String, 
                required: true },
    datePosted:{
        type: Date,
        required: false
    },
    revContent:{
        type: String,
        required: true
    }, 
    reviewImg:{
        type: String,
    },
    responseDatePosted: {
        type: Number, 
    },
    responseContent: {
        type: String, 
    }
}, {timestamps: true}) 

module.exports = mongoose.model('Review', reviewSchema)

//Review.find()