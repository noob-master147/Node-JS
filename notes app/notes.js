const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  // const duplicateNotes = notes.filter((note) => note.title === title )
  const duplicateNote = notes.find((note)=> note.title === title)
  
  if (!duplicateNote) {
    notes.push({
    title: title,
    body: body,
    })
    const message = chalk.green.inverse.bold(' Notes Added ')
    console.log(message)
  } else {
    const message = chalk.red.inverse.bold(' Note Title taken ')
    console.log(message)
  }
  
  saveNotes(notes)
}

const removeNote = (title) => {
  let notes = loadNotes()
  const check = notes.filter((note) => note.title !== title)
  
  if(check.length === notes.length) {
    const message = chalk.red.inverse.bold(' Notes not found ')
    console.log(message)
    
  } else {
    const message = chalk.green.inverse.bold(' Notes Removed ')
    console.log(message)
    saveNotes(check) 
  }
}

const saveNotes = (notes) => {
  const data = JSON.stringify(notes)
  fs.writeFileSync('notes.json',data)
}

const loadNotes = () => {

  try{
  const dataBuffer = fs.readFileSync('notes.json')
  const data = JSON.parse(dataBuffer.toString())
  return data
  } catch(e) {
    return []
  }
}

const listNote = () => {
  const data = loadNotes()
  data.forEach(note => console.log(chalk.inverse.yellow.bold(note.title)));
}

const readNote = (title) => {
  const data = loadNotes()
  const reqNote = (data.find((note) => note.title === title))
  if(reqNote){
    console.log(chalk.inverse.bold.cyanBright(reqNote.title))
    console.log(chalk.bold(reqNote.body))
  } else {
    console.log(chalk.bgWhite.red.bold.inverse(" Note does'nt exists! "))
  }



}

{//challenge: Setup command and option 

/*
1. Setup the remove command to take a required "--title" option
2. Create and export a removeNote function from notes.js
3. call removeNote in remove command handler
4. have removeNote log the title of the note to be removed
5. test your work using: node app.js remove --title="blah-blah" 
*/
}








module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
}