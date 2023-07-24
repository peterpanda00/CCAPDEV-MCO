const Room = require('../models/roomModel')
const mongoose = require('mongoose')

//Get all rooms
const getRooms = async(req,res)=>{
    const rooms = await User.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}   


//Get a single room
const getRoom = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})

    }
    const room = await Room.findById(id)

    if(!room){
        return res.status(404).json({error:'No such user'})
    }

    res.status(200).json(room)

}


//Create New Room
const createRoom = async(req,res) => {

    const {title,price,maxPeople,desc,roomImg,roomNumbers} = req.body
    
    // Add document to database
    try{
        const room = await Room.create({title,price,maxPeople,desc,roomImg,roomNumbers})
        res.status(200).json(user)

    }catch(error){
        res.status(400).json({error:error.message})

    }
}

//Delete a Room
const deleteRoom = async (req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such room'})

    }

    const room = await Room.findOneAndDelete({_id: id})

    if(!room){
        return res.status(404).json({error:'No such room'})
    }

    res.status(200).json(user)

}


//Update Room
const updateRoom = async(req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such room'})

    }

    const room = await Room.findOneAndUpdate({_id : id},{
        ...req.body

        })
    
    if(!user){
        return res.status(404).json({error:'No such room'})
    }

    res.status(200).json(room)


}


module.exports = {

    getRooms,
    getRoom,
    createRoom,
    deleteRoom,
    updateRoom
}