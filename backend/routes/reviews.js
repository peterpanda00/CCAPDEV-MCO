const express = require('express')
const Review = require('../models/reviewModel')

const router = express.Router()

// GET all review
router.get('/', (req,res) => {
    res.json({mssg:'GET all reviews'})
})

// GET single review
router.get('/:id', (req,res) => {
    res.json({mssg:'GET a single review'})
})

// POST a new review
router.post('/', async (req, res)=> {
    const {user,datePosted,revContent,reviewImg,likes,dislikes,responseDatePosted,responseContent} = req.body
    try{
        const review = await Review.create({user,
                                            datePosted,
                                            revContent, 
                                            reviewImg,
                                            likes,
                                            dislikes,
                                            responseDatePosted,
                                            responseContent})
        res.status(200).json(review)

    }catch(error){
        res.status(400).json({error:error.message})

    }


})

// DELETE a review
router.delete('/:id', (req, res)=> {
    res.json({mssg : 'DELETE a review'})

})

// UPDATE a review
router.patch('/:id', (req, res)=> {
    res.json({mssg : 'UPDATE a review'})

})

module.exports = router

