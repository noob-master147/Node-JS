const fs = require('fs')

fs.writeFileSync('notes.txt','My name is DK\n')

//Challenge: Append a message to notes.js

//Use appendFileSync to append the file

fs.appendFileSync('notes.txt', 'This is the appended txt')