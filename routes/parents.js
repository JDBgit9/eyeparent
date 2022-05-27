const express = require('express')
const parents = require('../models/parents')
const router = express.Router()
const Parent = require('../models/parents')

//Getting all
router.get('/', async (req, res) => {
try {
     const parents = await Parent.find()
} catch (err) {
  res.status(500).json({message: err.message })
}
})

//Getting one 
 router.get('/:id', async (req, res) => {
  res.send(req.params.id)
}) 

//Creating One
router.post('/', (req, res) => {
    
})

//Updating One
router.patch('/:id', (req, res) => {
    
})


//Deleting one
router.delete('/:id', (req, res) => {
    
})



module.exports = router