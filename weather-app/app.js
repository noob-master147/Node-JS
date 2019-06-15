const request = require('request')

var  url = 'https://api.darksky.net/forecast/8cc1e6c21f1bb24f693856b227882375/28.7041,77.1025?units=si'
request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather service')
    } else if(response.body.error) {
        console.log(response.body.error)
        console.log('Unable to connect to weather service')
    } else {
        var temp = response.body.currently.temperature
        var precipProb = response.body.currently.precipProbability
        console.log(temp)
        console.log(precipProb)
    }
}) 

// Geo coding 

var Gcode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Lucknow.json?limit=1&access_token=pk.eyJ1Ijoibm9vYi1tYXN0ZXIxNDciLCJhIjoiY2p3eGNsNnV5MHQ0ajQ4bnQ4OWJwOXA5OCJ9.nev61Q8X_Phd4REhg-0KLg'
request({ url: Gcode, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service')
    } else if(response.body.features.length == 0) {
        console.log('location not found.\nTry some new keywords')
    } else {
        var longitude = response.body.features[0].center[0]
        var latitude = response.body.features[0].center[1]
        console.log(longitude)
        console.log(latitude)
    }
})







