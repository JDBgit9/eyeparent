const express = require('express')
const parents = require('../models/parents')
const router = express.Router()
const Parent = require('../models/parents')

//Getting all
router.get('/', async (req, res) => {
try {
     const parents = await Parent.find()
     res.json(parents)
} catch (err) {
  res.status(500).json({ message: err.message })
}
})

//Getting one 
 router.get('/:id', async (req, res) => {
  res.send(req.params.id)
}) 

//Creating One
router.post('/', async (req, res) => {
    const parent = new Parent({
      name: req.body.name,
      childName: req.body.childName 
    })
    try{
      const newParent = await parent.save() 
       res.status(201).json(newParent)
    } catch (err){
       res.status(400).json({message: err.message})
    }
})

//Updating One
router.patch('/:id', (req, res) => {
    
})


//Deleting one
router.delete('/:id', (req, res) => {
    
})



module.exports = router