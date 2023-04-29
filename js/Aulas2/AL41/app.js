console.clear()

const path = require('path')
const escrever = require('./modulos/escrever')
const ler = require('./modulos/ler')

const caminho = path.resolve(__dirname, '.', 'pessoa.json')

const pessoa = {
    nome: 'Renan',
    dataNascimento: '31/10/2003',
    curso: 'CCX'
}

const json = JSON.stringify(pessoa, '', 2)

//escrever(caminho, json)

async function lerArquivo(caminho) {
    const data = await ler(caminho)

    return data
}

const dados = lerArquivo(caminho)
    .then (dados => console.log(dados))
