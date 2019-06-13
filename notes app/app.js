const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes') 

// if (command === 'add') {
//     console.log('adding a note')
// } else if(command === 'remove') {
//     console.log('removing notes')
// } else if(command === 'read') {
//     console.log('reading notes')
// }

// add read remove list


//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note')
    }

})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a  note',
    handler: function () {
        console.log('Removing a note')
    }
})


console.log(yargs.argv)