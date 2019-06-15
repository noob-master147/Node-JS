const request = require('request')

const  url = 'https://api.darksky.net/forecast/8cc1e6c21f1bb24f693856b227882375/28.7041,77.1025?units=si'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currently.temperature)
    console.log(response.body.currently.precipProbability)

}) 

// Geo coding

const Gcode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Noida.json?limit=1&access_token=pk.eyJ1Ijoibm9vYi1tYXN0ZXIxNDciLCJhIjoiY2p3eGNsNnV5MHQ0ajQ4bnQ4OWJwOXA5OCJ9.nev61Q8X_Phd4REhg-0KLg'
request({ url: Gcode, json: true}, (error, response) => {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log(longitude)
    console.log(latitude)
})

