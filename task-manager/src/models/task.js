const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    description: {
        trim: true,
        required: true,
        type: String
    },
    completed: {
        type: Boolean,
        default : false,
    }
})

module.exports = Task