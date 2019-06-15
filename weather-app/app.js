const request = require('request')
const geoCode = require('./utils/geocode')
const getForcast = require('./utils/forcast')
const yargs = require('yargs')



yargs.command({
    command: 'forcast',
    describe: 'Forcast of the given Location',
    builder: {
        location: {
            describe: 'State the Location',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        geoCode(argv.location, (error, data) => {
            if (error) {
                return console.log('error:', error)
            } 
            //if no error is present then
            console.log('data:', data)
            getForcast(data.longitude, data.latitude, (error, forcastData) => {
                if (error) {
                    return console.log('error:', error)
                } 
                //if no error is present then
                console.log('data:', forcastData)
            })
        })
    }
})


yargs.parse()