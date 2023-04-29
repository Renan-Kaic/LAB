console.clear()
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
}


Produto.prototype.aumento = function (percentual) {
    this.preco += (this.preco * (percentual / 100));
}

Produto.prototype.desconto = function (percentual) {
    this.preco -=  (this.preco * (percentual / 100));
}

Produto.prototype.estoque = function (quantidade) {
    this.estoque = quantidade;
}


function camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

camiseta.prototype = Object.create(Produto.prototype);
camiseta.prototype.constructor = camiseta;

const p1 = new camiseta('Regata', 7.5, 'Preta')

console.log(p1)

p1.aumento(10)

console.log(p1)


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;


    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function () {
            return estoque;
        },

        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;

        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const p2 = new Caneca('Caneca', 13, 'Plástico', 5)

console.log(p2)

p2.estoque = 15

console.log(p2)

