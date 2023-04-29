class Eletronico { 
    constructor (modelo, marca) {
        this.modelo = modelo
        this.marca = marca

        this.ligado = false
    }

    ligar() {
        if (this.ligado) return `${this.modelo} já esta ligado`

        this.ligado = true

        return `${this.modelo} ligado com sucesso!`
    }

    desligar () {
        if (!this.ligado) return `Dispositivo já desligado`

        this.ligado = false
        return `${this.modelo} desligado com sucesso!`

    }
}


const smart = new Eletronico('REDMI NOTE 11s', 'Redmi')


class Smartphone extends Eletronico {
    
    constructor (modelo, marca, ram, rom, tela, banda) {
        super(modelo, marca)
        this.ram = ram,
        this.rom = rom,
        this.tela = tela,
        this.banda = banda
    }

}


const cell = new Smartphone('Xiami T2', 'Xiami' ,4, 120, 10, 5)


console.log(cell);
