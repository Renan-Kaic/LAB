console.clear()

const readlineSync = require('readline-sync');

const cpf = readlineSync.question('Digite o CPF: ')
// retirando os caracteres especiais

const CPFf = cpf.replace(/[^0-9]/g, '')


if (CPFf.length !== 11) {
    console.log('O número de CPF deve conter 11 dígitos')
    return
  }
  
  if (!/^\d+$/.test(CPFf)) {
    console.log('O número de CPF deve conter apenas dígitos')
    return
  }

  
 
function verificarCPF (cpf) {

    function obterDigito (array) {

        let cont = array.length + 2

        const digito = array.map( (valor) => {
            cont--;
            return valor * cont
        }).reduce( (ac, vl) => ac + vl, 0) % 11


        return digito < 2 ? 0 : 11 - digito
    }

        const arrayCPF = cpf.split('')


    arrayCPF.splice(9, 2)

    arrayCPF.push(obterDigito(arrayCPF))
    arrayCPF.push(obterDigito(arrayCPF))

    return arrayCPF.join('') === cpf ? true : false
}

// formatando o CPF, caso não esteja formatado
function formatarCPF (cpf) {
    const arrayCPF = cpf.split('')
    arrayCPF.splice(3, 0, '.')
    arrayCPF.splice(7, 0, '.')
    arrayCPF.splice(11, 0, '-')
    return arrayCPF.join('')
}

const cpfFormatado = formatarCPF(CPFf)

console.log(verificarCPF(CPFf))