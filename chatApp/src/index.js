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

io.on('connection', (socket) => {
    console.log(chalk.bgGreen.black('New WebSocket Connection'))
    
    socket.emit('message', "Welcome")    
    socket.broadcast.emit('message', "A New User has Joined")
    socket.on('sendMessage', (message) => {
        console.log(message)
        io.emit('message', message)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A User has Left!')
    })
    
})

server.listen(port, ()=> {
    console.log(chalk.bgYellow.black(` Server is up and running on Port ${port} `))
})