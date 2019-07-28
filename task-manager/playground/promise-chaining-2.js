require('../src/db/mongoose')
const Tasks = require('../src/models/task')

Tasks.findByIdAndDelete('5d3de9b570308640a4eb830e').then((task) => {
    console.log(`Task removed`)
    return Tasks.countDocuments({
        completed: false
    }).then((result) => {
        console.log(`${result} is the count`)
    })
}).catch((e) => {
    console.log(e)
})
