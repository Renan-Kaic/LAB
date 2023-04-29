const doc = document

let h1 = document.querySelectorAll('h1')[0]
h1.style.border = '1px solid orange'

let p = document.querySelectorAll('.texto')

let p1 = 2, p2 = 3, p3 = 4;

const button = document.querySelector('.bt1')

function incrementar() {
    p[0].textContent = `Paragrafo ${p1}`
    p[1].textContent = `Paragrafo ${p2}`
    p[2].textContent = `Paragrafo ${p3}`
    p1++;
    p2++;
    p3++;   
}

button.addEventListener('click', incrementar)

const btn = document.querySelector('#enviar')


btn.addEventListener('click', function(e) {
    e.preventDefault()

    const nome = document.querySelector('#nome')
    const sobrenome = document.querySelector('#sobrenome')
    console.log(nome.value, sobrenome.value);
    nome.value = ''
    sobrenome.value = ''
})