console.clear()
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const gerarMaiuscula = () => String.fromCharCode(rand(65, 91))
const gerarMinuscula = () => String.fromCharCode(rand(97, 123))


const simbolos = [
    33, 35, 36, 37, 38, 42, 43, 45, 46, 47, 58, 60, 61, 62, 63, 64, 92, 95, 123, 124, 125, 126
]

const gerarSimbolos = () => String.fromCharCode(simbolos[rand(0, 23)])


export function gerarSenha(qtd, maiu, min, simbolo, num) {
    qtd = Number(qtd)
    const senhaArray = []

    for (let i = 0; i < qtd; i++) {

        maiu && senhaArray.push(gerarMaiuscula())
        min && senhaArray.push(gerarMinuscula())
        simbolo && senhaArray.push(gerarSimbolos())
        num && senhaArray.push(rand(0, 9))
    }
    return senhaArray.join('').slice(0, qtd)
}
