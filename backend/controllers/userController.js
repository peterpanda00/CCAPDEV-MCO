const User = require('../models/userModel')
const mongoose = require('mongoose')

//Get all user
const getUsers = async(req,res)=>{
    const users = await User.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}   


//Get a single user
const getUser = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})

    }
    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({error:'No such user'})
    }

    res.status(200).json(user)

}


//Create New User
const createUser = async(req,res) => {

    const {formType,userName,password,firstName,lastName,contactNumber,emailAddress,confirmPassword} = req.body
    
    // Add document to database
    try{
        const user = await User.create({formType,   
                                        userName,password,
                                        firstName,
                                        lastName,
                                        contactNumber,
                                        emailAddress,
                                        confirmPassword})
        res.status(200).json(user)

    }catch(error){
        res.status(400).json({error:error.message})

    }
}

//Delete a User
const deleteUser = async (req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})

    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user){
        return res.status(404).json({error:'No such user'})
    }

    res.status(200).json(user)

}


//Update User
const updateUser = async(req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})

    }

    const user = await User.findOneAndUpdate({_id : id},{
        ...req.body

        })
    
    if(!user){
        return res.status(404).json({error:'No such user'})
    }

    res.status(200).json(user)


}


module.exports = {

    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}