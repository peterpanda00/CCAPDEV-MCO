const express = require('express')
const {
    getRooms,
    getRoom,
    deleteRoom,
    createRoom,
    updateRoom,
    searchRooms

} = require('../controllers/roomController')

const router = express.Router()

// GET all rooms
router.get('/', getRooms)

// GET single room
router.get('/:id', getRoom)

// POST a new room
router.post('/', createRoom)

// DELETE a room
router.delete('/:id', deleteRoom)

// UPDATE a room
router.patch('/:id', updateRoom)

// SEARCH a room
router.post('/search', searchRooms);


module.exports = router