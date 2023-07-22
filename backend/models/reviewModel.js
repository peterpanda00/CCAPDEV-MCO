const mongoose = require('mongoose')

const Schema = mongoose.Schema


const reviewSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    datePosted:{
        type: Date,
        required: true
    },
    revContent:{
        type: String,
        required: true
    }, 
    reviewImg:{
        type: String,
    },
    likes: {
        type: Number, 
        required: true
    },
    dislikes: {
        type: Number, 
        require: true
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