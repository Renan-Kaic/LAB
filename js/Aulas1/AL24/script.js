const _velocidade = Symbol('velocidade')
class  Carro {
    constructor (modelo) {
        this.modelo = modelo
        this[_velocidade] = 0
    }

    acelerar() {
        if (this[_velocidade] >= 100) {
            return
        }
        this[_velocidade] ++
    }

    frear() {
        if (this[_velocidade] == 0) return

        this[_velocidade]--;
    }

    get velocidade (){
        return this[_velocidade]
    }

}


const cn = new Carro ('S Plaid')
console.log(cn.velocidade)