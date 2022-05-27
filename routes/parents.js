const express = require('express')
const router = express.Router()

//Getting all
router.get('/', (req, res) => {

})

//Getting one 
 router.get('/:id', (req, res) => {
  res.send('Hello World')
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