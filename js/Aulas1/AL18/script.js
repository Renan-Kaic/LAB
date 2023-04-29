class Produto {
    constructor() {
        this.nome = 'Caneta Bic Preta';
        this.preco = 1.90;


    }
    desconto(percentual) {
        this.preco = this.preco - (this.preco * (percentual / 100));
    }
    aumento(percentual) {
        this.preco = this.preco + (this.preco * (percentual / 100));
    }
}




const p1 = new Produto();
p1.desconto(10);

console.log(p1.preco);

p1.aumento(10.99);

console.log(p1.preco);
