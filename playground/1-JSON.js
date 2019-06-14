const fs = require('fs')
// const book = {
//     title: 'Ego is Enemy',
//     author: 'Ryan Holiday',

// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('JSON-1.json', bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json').toString()

// const data = JSON.parse(dataBuffer)
// console.log(data.title)

/**********************/
//challenge

const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
const dataJSON = JSON.parse(data)

dataJSON.name = 'Divyansh'
dataJSON.age = 19
const datastring = JSON.stringify(dataJSON)
fs.writeFileSync('1-json.json',datastring)