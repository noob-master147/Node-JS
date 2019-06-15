const request = require('request')

const getForcast = (longitude, latitude, callback) => {
    console.log(longitude, latitude)
    const   url = 'https://api.darksky.net/forecast/8cc1e6c21f1bb24f693856b227882375/'+latitude+','+longitude+'?units=si'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error){
            callback(response.body.error,undefined)
        } else {
            callback(undefined, {
                temperature:response.body.currently.temperature,
                precipProb : response.body.currently.precipProbability
            })
        }
    })
}


module.exports = getForcast