const express = require('express')
const chalk = require('chalk')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', () => {
    console.log(chalk.bgGreen.black('New WebSocket Connection'))
})

server.listen(port, ()=> {
    console.log(chalk.bgYellow.black(` Server is up and running on Port ${port} `))
})