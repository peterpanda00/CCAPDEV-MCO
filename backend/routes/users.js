const express = require('express')
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser

} = require('../controllers/userController')

const router = express.Router()

// GET all reviews
router.get('/', getUsers)

// GET single review
router.get('/:id', getUser)

// POST a new review
router.post('/', createUser)

// DELETE a review
router.delete('/:id', deleteUser)

// UPDATE a review
router.patch('/:id', updateUser)

module.exports = router