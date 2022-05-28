const mongoose = require('mongoose')



const parentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    childName: {
        type: String,
        required: true
  }
   
})
module.exports = mongoose.model('Parent',  parentSchema)