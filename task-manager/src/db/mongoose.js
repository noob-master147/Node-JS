const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User' ,{
    name: {
        type: String,
        require:true
    },
    age: {
        type: Number,
        validate(value) {
            if (value <= 0) {
                throw new Error('Age must be a positive nummber')
            }
        }
    }
})

// const me = new User({
//     name: 'Divyansh',
//     age: 19
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error! ',error)
// })