const request = require('request')

const geoCode = (address, callback) => {
    const  url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?limit=1&access_token=pk.eyJ1Ijoibm9vYi1tYXN0ZXIxNDciLCJhIjoiY2p3eGNsNnV5MHQ0ajQ4bnQ4OWJwOXA5OCJ9.nev61Q8X_Phd4REhg-0KLg'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if(response.body.features.length === 0) {
            callback('Location not found.\nTry some new keywords')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
    
}

module.exports = geoCode