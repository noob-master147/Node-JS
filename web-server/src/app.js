const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const getForcast = require('./utils/forcast')

const app = express()

//Defining constants for the path name
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setting up the express and handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Noob Master'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Noob Master'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Available',
        name: 'Noob Master'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geoCode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        getForcast(longitude, latitude, (error, forcastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({ 
                forcastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'You must provide a search term'
        })
    }

    else {
        res.send({
            products: []
        })
    }
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        error: 'help article not found',
        name: 'Noob Master'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        error: '404 Error',
        name: 'Noob Master'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})