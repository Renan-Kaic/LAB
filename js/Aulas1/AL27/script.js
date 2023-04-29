console.clear()

class CPF {
    constructor (cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false, 
            value: cpf.replace(/[^0-9]/g, '') 

        }),

        this.validarCPF()
    }


    
    gerarDigito(cpfSemDigito) {

        let cont = cpfSemDigito.length + 1
        let total = 0
        for (let strNum of cpfSemDigito) {
            total += cont * Number(strNum)
            cont--;
        }

        const digito =  total % 11

        return digito < 2 ? 0 : 11 - digito

    }

    validarCPF() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false

        const arrayCPF = this.cpfLimpo.split('')
        arrayCPF.splice(9, 2)

        arrayCPF.push(String(this.gerarDigito(arrayCPF)))
        arrayCPF.push(String(this.gerarDigito(arrayCPF)))

        const resultado = arrayCPF.join('')


        return resultado == this.cpfLimpo
    }

}

const cpf = new CPF('61385392304')

console.log(cpf.validarCPF())
console.log(cpf) 

console.log('\n\n')