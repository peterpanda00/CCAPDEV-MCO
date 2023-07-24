const Room = require('../models/roomModel')
const mongoose = require('mongoose')

//Get all rooms
const getRooms = async(req,res)=>{
    const rooms = await Room.find({}).sort({createdAt: -1})
    res.status(200).json(rooms)
}   


//Get a single room
const getRoom = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such room'})

    }
    const room = await Room.findById(id)

    if(!room){
        return res.status(404).json({error:'No such room'})
    }

    res.status(200).json(room)

}


//Create New Room
const createRoom = async(req,res) => {

    const {roomName,price,addPrice,capacity,desc,roomImg,roomNumbers} = req.body
    
    // Add document to database
    try{
        const room = await Room.create({roomName,price,addPrice,capacity,desc,roomImg,roomNumbers})
        res.status(200).json(room)

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

    res.status(200).json(room)

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
    
    if(!room){
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