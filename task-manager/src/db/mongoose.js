const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})



const User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email!')

            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive nummber')
            }
        }
    },
    password: {
        trim: true,
        require: true,
        type: String,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }

    }
})

// const me = new User({
//     name: 'Divyansh',
//     age: 19,
//     email: 'divyanshkhandelwal147@gmail.com',
//     password: 'myPASSword '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error! ',error)
// })


const Task = mongoose.model('Task', {
    description: {
        trim: true,
        required: true,
        type: String
    },
    completed: {
        type: Boolean,
        default : false,
        trim: true,
    }
})


const task = new Task({

})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Task not saved ', error)
})