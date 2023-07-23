const express = require('express')
const {
    createContact,
    getContact,
    getContacts,
    deleteContact,
    updateContact

} = require('../controllers/contactController')

const router = express.Router()

// GET all contacts
router.get('/', getContacts)

// GET single contact
router.get('/:id', getContact)

// POST a new contact
router.post('/', createContact)

// DELETE a contact
router.delete('/:id', deleteContact)

// UPDATE a contact
router.patch('/:id', updateContact)

module.exports = router

