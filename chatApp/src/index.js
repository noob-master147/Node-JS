const express = require('express')
const chalk = require('chalk')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const Filter = require('bad-words')

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

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if(filter.isProfane(message)) {
            return callback("Profanity not allowed!")
        }
        io.emit('message', message)
        callback()
    })
    socket.on('sendLocation', (location, callback) => {
        io.emit('message', `https://google.com/maps?q=${location.latitude},${location.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A User has Left!')
    })
})

server.listen(port, () => {
    console.log(chalk.bgYellow.black(` Server is up and running on Port ${port} `))
})