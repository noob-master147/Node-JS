const fs = require('fs')
const chalk = require('chalk')
const getNotes = function() {
  return 'Your notes are ...'
}

const addNote = function(title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
    title: title,
    body: body,
    })
    console.log('Note Added')
  } else {
    console.log('Note Title Taken')
  }
  
  saveNotes(notes)
}

const removeNote = function(title) {
  let notes = loadNotes()
  const check = notes.filter(function(note) {
  return note.title !== title
  })
  
  

  if(check.length === notes.length) {
    const message = chalk.red.inverse.bold(' Notes not found ')
    console.log(message)
    
  } else {
    const message = chalk.green.inverse.bold(' Notes Removed ')
    console.log(message)
    saveNotes(check)
    
  }
  
}

const saveNotes = function(notes) {
  const data = JSON.stringify(notes)
  fs.writeFileSync('notes.json',data)
}

const loadNotes = function() {

  try{
  const dataBuffer = fs.readFileSync('notes.json')
  const data = JSON.parse(dataBuffer.toString())
  return data
  } catch(e) {
    return []
  }
}



//challenge: Setup command and option 

/*
1. Setup the remove command to take a required "--title" option
2. Create and export a removeNote function from notes.js
3. call removeNote in remove command handler
4. have removeNote log the title of the note to be removed
5. test your work using: node app.js remove --title="blah-blah" 
*/























module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,

}