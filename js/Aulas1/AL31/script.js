console.clear()

const rand = (min = 0, max = 3) => {
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
            resolve(msg.toUpperCase() + '- Passei')
        }, tmp)
    })
}


//espera('Fase 1 ', rand(0, 3))
//    .then (valor => {
//        console.log(valor)
//        
//        return espera('Fase 2 ', rand(0, 3))
//    })
//    .then ( valor => {
//        console.log(valor)
//        return espera('Fase 3 ')
//    }
//    )
//    .then(valor => console.log(valor))


async function esperaAi() {

    try {
        const F1 = await espera('Fase 1 ', rand())
        console.log(F1)
        const F2 = await espera(10, rand())
        console.log(F2)
        const F3 = await espera('Fase 3 ', rand())
        console.log(F3)
    } catch(e) {
        console.log(e)
    }
}

esperaAi()