 console.clear()

function criarPessoa(nome, sobrenome) {
    const PessoaProto = {
        falar() {
            console.log(`${this.nome} está falando`);
            return 0
        },
        
        comer() {
            console.log(`${this.nome} está comendo`);

            return 0
        }
    }
    
    return Object.create(PessoaProto, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    })

}

const p1 = criarPessoa('Renan', 'Kaic')
const p2 = criarPessoa('Pedro', 'Henrique')

