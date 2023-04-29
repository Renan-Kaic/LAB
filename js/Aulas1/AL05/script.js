function obterData() {
    let data = new Date()

    // retornando a data no padrão de brasilia
}

function executar() {
    console.clear()
    let data = obterData()
    console.log(data)
}

let time = setInterval(function () {
    console.clear()
    let data = obterData()
    console.log(data)
}, 1000)

setTimeout(function () {
    clearInterval(time)
}, 1000 * 10)