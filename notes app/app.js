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
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        
        body: {
            describe: 'Add the Text',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        console.log(`Title: ${argv.title}`)
        console.log(`Body: ${argv.body}`)
    }

})

//removing remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    handler: function () {
        console.log('Removing a note')
    }
})

//listing the notes
yargs.command({
    command: 'list',
    describe: 'List out the Notes.',
    handler: function () {
        console.log('Listing out all the notes')
    }
})

//read the notes
yargs.command({
    command: 'read',
    describe: 'reading the notes',
    handler: function () {
        console.log('Reading a note')
    }
})



yargs.parse()