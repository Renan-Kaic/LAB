let ID = 0
class Pessoa {
    static ID = 0
    constructor (nome, sobrenome) {
        this.ID = Pessoa.ID++ // ID Auto-incrementado


        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const P1 = new Pessoa('Renan', 'Kaic')
const P2 = new Pessoa('Pedro', 'Henrique')

console.log(P1)
console.log(P2);