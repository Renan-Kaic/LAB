console.clear()

import readlineSync from 'readline-sync';

class Pessoa {
    constructor (nome, sobrenome, dataNascimento, cpf) {
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.dataNascimento = dataNascimento,
        this.cpf = [cpf,  function (){
            let cont = cpf.length + 2

            const digito = cpf.map( (valor) => {
                cont--;
                return valor * cont
            }).reduce( (ac, vl) => ac + vl, 0) % 11
    

            const arrayCPF = cpf.split('')
            arrayCPF.slice(9, 2)

            arrayCPF.push(obterDigito(arrayCPF))
            arrayCPF.push(obterDigito(arrayCPF))

            return arrayCPF.join('') === cpf ? true : false

        }()]
    }
}

const CPF = readlineSync.question("CPF: ")

const PS = new Pessoa('Renan', 'Kaic', '31-10-2003', '61385392304')

console.log(PS)
