const express = require('express')
const parents = require('../models/parents')
const router = express.Router()
const Parent = require('../models/parents')

//Getting all
router.get('/', getParent, async (req, res) => {
try {
     const parents = await Parent.find()
     res.json(res.parent)
} catch (err) {
  res.status(500).json({ message: err.message })
}
})

//Getting one 
 router.get('/', getParent, (req, res) => {
  res.json(res.parent)
}) 

//Creating One
router.post('/', getParent, async (req, res) => {
    const parent = new Parent({
      name: req.body.name,
      childName: req.body.childName 
    })
    try{
      const newParent = await parent.save() 
       res.status(201).json(newParent)
    } catch (err){
       res.status(400).json({ message: err.message })
    }
})

//Updating One
router.patch('/:id', getParent, async (req, res) => {
    if (req.body.parent != null) {
      res.parent.name = req.body.name
   }
   if (req.body.childName != null) {
    res.parent.childName = req.body.childName
   }
   try{
      const updatedParent = await res.parent.save()
      res.json(updatedParent)
   } catch (err) {
       res.status(400).json({ message: err.message })
   }
})
//Deleting one
router.delete('/:id', getParent, async (req, res) => {
 try{
     await res.parent.remove()
     res.json('Deleted Parent')
 }catch (err) { 
   res.status(500).json({ message: err.message })
 }
})

async function getParent(req, res, next) {
  let Parent
  try {
     parent = await Parent.findById(req.params.id)
     if (parent == null) {
       return res.status(404).json({ message: 'Cannot find Parent' })
     }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.parent = parent
  next()
}

module.exports = router