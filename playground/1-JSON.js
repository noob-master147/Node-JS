const fs = require('fs')
// const book = {
//     title: 'Ego is Enemy',
//     author: 'Ryan Holiday',

// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('JSON-1.json', bookJSON)


const dataBuffer = fs.readFileSync('JSON-1.json').toString()

const data = JSON.parse(dataBuffer)
console.log(data.title)