const sec = document.querySelector('.sec');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const div = document.createElement("div")
sec.appendChild(div)

for (let i = 0; i < elementos.length; i++) {
    
    let {tag, texto} = elementos[i]
    let elemento = document.createElement(tag)
    elemento.innerText = texto

    div.appendChild(elemento)

}

sec.appendChild(div)
