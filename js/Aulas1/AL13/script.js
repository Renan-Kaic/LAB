console.clear()

// FILTER
const numeros = [5, 50, 80, 1, 2, 3, 5, 11, 999, 7]

let num = []

const numerosFiltrados = numeros.filter(valor => valor > 10)

//console.log(numeros, numerosFiltrados)



const pessoa = [
    { nome: 'Renan', idade: 19 },
    { nome: 'Pedro', idade: 12 },
    { nome: 'João', idade: 68 },
    { nome: 'Maria', idade: 12 },
    { nome: 'Henrique', idade: 51 },
    { nome: 'Hercules', idade: 16 }
]

const pessoasNomeG = pessoa.filter(
    valor => valor.nome.length > 5
)

//console.log(pessoasNomeG)

const pessoaID50 = pessoa.filter(valor => valor.idade > 50)

//console.log(pessoaID50)

const pessoaNomeA = pessoa.filter(
    valor => valor.nome.toLocaleUpperCase().endsWith('A')
)


// MAP

//console.log(pessoaNomeA)

const nomes = pessoa.map (
    (valor, index) => {
        return [valor.nome, index]
    }
)

//console.log(nomes)

const comIDS = pessoa.map (
    (obj, index) => {
        const newObj = {...obj}
        newObj.ID = index
        return newObj
    }
)

//console.log(comIDS )

const numerosDobro = numeros.map ( 
    valor => valor % 2 == 0 
)

// REDUCE

const total = numeros.reduce ( (ac, vl, index, array) => {
    if (vl % 2 === 0) {
        ac.push(vl)
    }
    return ac
}, [])

console.log(total)
