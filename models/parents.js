const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const Parent = require('../models/parent')


const parentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    nameOfChild: {
        type: String,
        required: true

    },
    busNumber: {
        type: Number,
        required: true

    },
    nameOfSchool: {
        type: String,
        required: true

    },
    nameOfCounty: {
        type: String,
        required: true

    },
    classroomOne: {
        type: String,
        required: true

    },
    classroomTwo: {
        type: String,
        required: true

    },
    classroomThree: {
        type: String,
        required: true

    },
    classroomFour: {
        type: String,
        required: true

    },
    classroomFive: {
        type: String,
        required: true

    },
    classroomSix: {
        type: String,
        required: true

    },
    classroomSeven: {
        type: String,
        required: true

    },
    LunchRoom: {
        type: Timestamp,
        required: true,
        default: Timestamp.now

    },

    gymRoom: {
        type: String,
        required: true

    },
    adminOffice: {
        type: String,
        required: true

    },
    theatreRoom:  {
        type: String,
        required: true

    },
    playGround: {
        type: String,
        required: true

    }


})
module.exports = mongoose.model('parent',  parentsSchema)