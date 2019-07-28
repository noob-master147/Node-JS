require('../src/db/mongoose')
 const User = require('../src/models/user')

User.findByIdAndUpdate('5d2ebda0e0d93b30fbf322b8',{
    'age': 20,
}).then((user) => {
    console.log(user)
    return User.countDocuments({
        'age':20
    }).then((result) => {
        console.log(result)
    })
}).catch((e) => {
    console.log(e)
})
