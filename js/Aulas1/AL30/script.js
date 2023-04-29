console.clear()

const rand = (min, max) => {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tmp) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject (false)
            return
        }

        setTimeout(() => {
            resolve(msg)
        }, tmp)
    })
}


const promises = [
    espera('1Pro', rand(0, 3)),
    espera('2Pro', rand(0, 3)),
    espera('3Pro', rand(0, 3)),
]

Promise.race (promises)
    .then (valor => {
        console.log(valor)
    })
    .catch (
        (vl)  => {
            console.log(vl)
        }
    )   