class Pessoa {
    static nextID = 0
    constructor (nome, sobrenome) {
        return {
            ID : Pessoa.nextID++,
            nome: nome,
            sobrenome: sobrenome
        }
    }
}


const ps = new Pessoa('Renan', 'Kaic')
const ps2 = new Pessoa('Hercules', 'Felinto')

console.log(ps)
console.log(ps2)

