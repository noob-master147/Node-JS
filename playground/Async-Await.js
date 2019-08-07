const add = (a,b) => {
    return new Promise((reject,resolve) => {
        setTimeout(() => {
            if(a<0 || b<0) {
                return reject('Number must be positive')
            }
            resolve(a + b)
        }, 2000);
    })
}




const doWork = async () => {
    const sum = await add(10,-90)
    const sum2 = await add(sum,50)
    const sum3 = await add(sum2,70)
    return sum3
}

doWork().then(() => {
    console.log('result', result)
}).catch((e) => {
    console.log('error:',e)
})