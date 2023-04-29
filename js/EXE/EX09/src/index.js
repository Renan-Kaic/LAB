import './assets/css/style.css'
import './modules/formGeraSenha.js'
import { mostrarSenha } from './modules/formGeraSenha.js'

const btn = document.querySelector('.BTNgerar-senha')


btn.addEventListener ('click', e => {
    e.preventDefault

    mostrarSenha()
})