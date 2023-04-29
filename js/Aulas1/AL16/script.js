console.clear()

function Produto (nome, preço, desc = 0.00, estoque) {
    this.nome = nome
    this.preço = preço

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: false, // Não pode ser alterado
        configurable: true // Não pode ser reconfigurado      
    })
}


const p1 = new Produto('Caneta', 8.59, 0, 100)
p1.estoque = 500

console.log(p1.estoque)