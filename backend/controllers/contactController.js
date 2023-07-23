const Booking = require('../models/contactModel')
const mongoose = require('mongoose')

//Get all contact
const getContacts = async(req,res)=>{
    const contacts = await Contact.find({}).sort({createdAt: -1})
    res.status(200).json(contacts)
}   


//Get a single contact
const getContact = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such contact'})

    }
    const contact = await Contact.findById(id)

    if(!contact){
        return res.status(404).json({error:'No such contact'})
    }

    res.status(200).json(contact)

}


//Create New Contact
const createContact = async(req,res) => {

    const {name,emailAddress,subject,message} = req.body
    
    // Add document to database
    try{
        const contact = await Contact.create({name,emailAddress,subject,message})
        res.status(200).json(contact)

    }catch(error){
        res.status(400).json({error:error.message})

    }
}

//Delete a Contact
const deleteContact = async (req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such contact'})

    }

    const contact = await Contact.findOneAndDelete({_id: id})

    if(!booking){
        return res.status(404).json({error:'No such contact'})
    }

    res.status(200).json(contact)

}


//Update Contact
const updateContact = async(req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such contact'})

    }

    const contact = await Contact.findOneAndUpdate({_id : id},{
        ...req.body

        })
    
    if(!contact){
        return res.status(404).json({error:'No such contact'})
    }

    res.status(200).json(contact)


}


module.exports = {

    getContact,
    getContacts,
    createContact,
    deleteContact,
    updateContact
}