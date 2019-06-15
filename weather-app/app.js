const request = require('request')

const  url = 'https://api.darksky.net/forecast/8cc1e6c21f1bb24f693856b227882375/28.7041,77.1025?units=si'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currently)
    console.log(response.body.currently.precipProbability)

})