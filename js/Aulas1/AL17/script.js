console.clear()

class Produto {
    constructor(nome, preço, estoque) {
        this.nome = nome
        this.preço = preço

        let estoquePrivado = estoque

        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: true,

            get: () => {
                return estoquePrivado
            },

            set: (valor) => {
                if (typeof valor !== 'number') {
                    throw new TypeError('0 valor inválido')
                }

                estoquePrivado = valor

            },

        })
    }
}


const p1 = new Produto('Camiseta', 20, 5)

console.log(p1.estoque)

p1.estoque = 10

console.log(p1.estoque)

