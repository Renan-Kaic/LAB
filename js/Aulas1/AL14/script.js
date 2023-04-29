console.clear()

let numeros = []

for (let i = 0; i < 100; i++) {
    const numero = (Math.random() * 101).toFixed(0)
    numeros.push(numero)
};


const pares = numeros.filter (
    valor => valor % 2 === 0
).map (
    valor => valor * 2    
).reduce (
    (ac, valor) => ac + valor
)

console.log(pares)
