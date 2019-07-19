const doworkCallback = (callback) => {
    setTimeout(() => {
        callback('This is error', undefined)
    }, 2000)
}

doworkCallback((error,result) => {
    if (error) {
        return console.log(error)       
    }

    console.log(result)
})