const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes') 
const fs = require('fs')


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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

})

//removing remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//listing the notes
yargs.command({
    command: 'list',
    describe: 'List out the Notes.',
    handler() {
        console.log('Listing out all the notes')
        notes.listNote()
    }
})

//read the notes
yargs.command({
    command: 'read',
    describe: 'reading the notes',
    handler() {
        console.log('Reading a note')
    }
})



yargs.parse()