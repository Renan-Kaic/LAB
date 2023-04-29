function objectFactory(nome, sobrenome,idade, sexo, altura, peso) {
    const pessoa = {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome  = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        idade, 
        sexo,
        altura,
        peso,
        get imc () {  
            const indice = peso / (altura * altura)
            return indice.toFixed(2)
        }
    }

    return pessoa
}

function toJson(obj) {
    // converte um objeto em uma string no formato JSON
    // e salva em um arquivo
    const fs = require('fs')
    const json = JSON.stringify(obj)
    fs.writeFileSync('Aulas/AL08/pessoa.json', json)
}

const pessoa1 = objectFactory('João','Pedro', 20, 'M', 1.80, 80)
const pessoa2 = objectFactory('Maria', 'Joaquina', 25, 'F', 1.60, 60)

console.log(pessoa1.imc)
console.log(pessoa2.imc)

pessoa1.nomeCompleto = 'Renan Kaic Rodrigues dos Santos'
console.log(pessoa1.sobrenome)
toJson(pessoa1)
toJson(pessoa2)