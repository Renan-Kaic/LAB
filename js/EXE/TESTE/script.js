import fetch from 'node-fetch'


console.clear()

async function obterDados() {
    const response = await fetch('https://estudenoifma.ifma.edu.br/editais/')

    if (response.status !== 200) console.log(`Error: ${response.status}`)

    const data = await response.text()


    return data
}

obterDados().then (data => console.log(data))