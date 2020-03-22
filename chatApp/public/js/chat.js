const socket = io()

// server(emit) --> client(receive) --> acknowledgement --> server
// client(emit) --> server(receive) --> acknowledgement --> server

//Elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')

socket.on('message', (message) => {
    console.log(message)
})

$messageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //disable the formButton here while it sends the message
    $messageFormButton.setAttribute('disabled', 'disabled')
    const message = event.target.elements.message.value
    socket.emit('sendMessage', message, (error) => {
        //enable the formButton here to again send the message
        $messageFormButton.removeAttribute('disabled')
        //clear the input feild
        $messageFormInput.value = ''
        //focus aainon message form input
        $messageFormInput.focus()
        if (error) {
            return console.log(error)
        }
        console.log("the meaasages delivered")
    })
    
})

$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not Suported by Your Browser')
    }
    //Disable the button here
    $sendLocationButton.setAttribute('disabled', 'disabled')
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            'latitude': position.coords.latitude,
            'longitude': position.coords.longitude
        }, (error) => {
            $sendLocationButton.removeAttribute('disabled')
            if(error) {
                return console.log(error)
            }
            console.log("Location shared")
        })
    })
})