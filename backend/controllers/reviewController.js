const Review = require('../models/reviewModel')
const mongoose = require('mongoose')


//Get all reviews
const getReviews = async(req,res)=>{
    const reviews = await Review.find({}).sort({createdAt: -1})
    res.status(200).json(reviews)
}   


//Get a single review
const getReview = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such post'})

    }
    const review = await Review.findById(id)

    if(!review){
        return res.status(404).json({error:'No such post'})
    }

    res.status(200).json(review)

}


//Create New Review
const createReview = async(req,res) => {

    const {userName,datePosted,revContent,reviewImg,responseDatePosted,responseContent} = req.body
    console.log(req.file)
    
    // Add document to database
    try{
        const review = await Review.create({userName,
                                            datePosted,
                                            revContent,
                                            reviewImg,
                                            responseDatePosted,
                                            responseContent})
        res.status(200).json(review)

    }catch(error){
        res.status(400).json({error:error.message})

    }
}

//Delete a Review
const deleteReview = async (req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such post'})

    }

    const review = await Review.findOneAndDelete({_id: id})

    if(!review){
        return res.status(404).json({error:'No such post'})
    }

    res.status(200).json(review)

}


//Update Review
const updateReview = async(req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such post'})

    }

    const review = await Review.findOneAndUpdate({_id : id},{
        ...req.body

        })
    
    if(!review){
        return res.status(404).json({error:'No such post'})
    }

    res.status(200).json(review)


}


//Comment Review
const createComment = async (req, res) => {
    const { id } = req.params 
  
    const { responseContent } = req.body;
    console.log(req.file);
  
    try {
      
      const review = await Review.findById(id);
  
      if (!review) {
        return res.status(404).json({ error: 'Review not found.' });
      }
  
    
      review.responseContent.push(...responseContent);
  
    
      const updatedReview = await review.save();
  
      res.status(200).json(updatedReview);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports = {

    getReviews,
    getReview,
    createReview,
    deleteReview,
    updateReview,
    createComment
}