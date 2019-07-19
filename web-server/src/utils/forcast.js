const request = require('request')

const getForcast = (longitude, latitude, callback) => {
    const   url = 'https://api.darksky.net/forecast/8cc1e6c21f1bb24f693856b227882375/'+latitude+','+longitude+'?units=si'
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error){
            callback(body.error,undefined)
        } else {
            callback(undefined, {
                summary : body.daily.summary,
                temperature : body.currently.temperature,
                precipProb : body.currently.precipProbability*100,
                body : body
            })
        }
    })
}


module.exports = getForcast