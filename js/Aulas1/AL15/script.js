const numeros = () => {
    let nums = []
    for (let i = 0; i < 100; i++) {
        let num = (Math.random() * 100).toFixed(0)
        nums.push(num)
    }

    return nums
}

const numerosAleatorios = numeros()

console.log(numerosAleatorios.sort((a, b) => a - b))