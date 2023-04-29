function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function espera(msg, tmp) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD')
        setTimeout(() => {
            resolve(msg)
        }, tmp)
    })
}


espera('1', rand(1, 3))
    .then(
        msg => {
            console.log(msg)
            return espera('2', rand(3, 8))
        }
    ).then(
        msg => {
            console.log(msg)
            return espera(2, rand(7, 12))   
        }
    )
    .catch( e => console.log(e))