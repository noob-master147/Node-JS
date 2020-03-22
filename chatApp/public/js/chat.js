const socket = io()

// server(emit) --> client(receive) --> acknowledgement --> server

// client(emit) --> server(receive) --> acknowledgement --> server

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (event) => {
    event.preventDefault()
    const message = event.target.elements.message.value
    socket.emit('sendMessage', message, (error) => {
        if (error) {
            return console.log(error)
        }
        console.log("the meaasages delivered")
    })
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not Suported by Your Browser')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude, position.coords.longitude)
        socket.emit('sendLocation', {
            'latitude': position.coords.latitude,
            'longitude': position.coords.longitude
        }, (error) => {
            if(error) {
                return console.log(error)
            }
            console.log("Location shared")
        })
    })
})