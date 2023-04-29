 console.clear();


function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}


Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    if (valor <= 0 || typeof valor !== 'number') {
        console.log('Valor inválido');
        return;
    }

    this.saldo += valor;
    console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
    
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
}

const cn = new Conta(11, 22, 10);
cn.depositar(10);
cn.sacar(10)
cn.sacar(10)


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)

    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente e limite: ${this.saldo + this.limite}`)
        this.verSaldo()    
        return   
    }

    this.saldo -= valor
    console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`)
    this.verSaldo()
}

const cnc = new  ContaCorrente(1, 1025, 100, 100)

cnc.sacar(200)
cnc.sacar(1)