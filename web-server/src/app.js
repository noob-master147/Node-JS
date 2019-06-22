const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
    res.render('index' ,{
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
    res.send({
        forcast: 'it is snowing',
        location: 'Noida'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})