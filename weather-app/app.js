const request = require('request')
const geoCode = require('./utils/geocode')
const getForcast = require('./utils/forcast')



geoCode('Lucknow', (error, location) => {
    if (error) {
        console.log('error:', error)
    } else {
        console.log('data:', location)
        getForcast(location.longitude, location.latitude, (error, data) => {
            if (error) {
                console.log('error:', error)
            } else {
                console.log('data:', data)
            }
    })
    }
    
})