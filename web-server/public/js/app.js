console.log('client side java script')



const form = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msgOne')
const msgTwo = document.querySelector('#msgTwo')

// msgOne.textContent = 'From JavaScript'

form.addEventListener('submit', (e) => {
    e.preventDefault()
    msgOne.textContent = '' 
    msgTwo.textContent = ''
    msgThree.textContent = ''
    const url = 'http://localhost:3000/weather?address=' + search.value
    msgOne.textContent = 'Loading Your Weather...'
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                msgOne.textContent = 'Unable to Fetch weather.' 
                msgTwo.textContent = data.error 
            } else {
                msgOne.textContent = 'Weather in Your Location is..'
                msgTwo.textContent = 'Temperature: ' + data.forcastData.temperature 
                msgThree.textContent = 'Rainfall Prob: ' + data.forcastData.precipProb 
                console.log(data.location)
                console.log(data.forcastData)
            }
        })
    })
})