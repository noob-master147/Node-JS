{//Notes
    // // //loading another js file in app.js
// // const myName = require('./utils')

// // console.log(myName)

// //calling a function from utils.js

// const myName = require('./utils')

// console.log(myName('Noob','Master'))

/****************************/
}

{// challenge: Define and use a function in new file

// 1. Create a new file called notes.js
// 2. Create getNots function that returns "Your notes..."
// 3. Export getNotes function
// 4. From applicationCache.js load an and callthe 
//    function printing message to the console
}


// const validator = require('validator')
// const getNotes = require('./notes')

// const message = getNotes()
// console.log(message)
// console.log(validator.isEmail('a@gmail.com'))

const chalk = require('chalk')
console.log(chalk.black.bgYellow.bold('Success!'))