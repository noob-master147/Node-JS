const express = require('express')

const app = express()
app.get('',(req, res) => {
    res.send('Hello express')
})

app.get('/help' , (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('about the page')
})

app.get('/weather', (req, res) => {
    releaseEvents.send('weather page')
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})