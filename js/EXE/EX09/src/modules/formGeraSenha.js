import { gerarSenha } from "./gerador";

const divGerarSenha = document.querySelector('.formGeraSenha')

const qtdCaract = document.querySelector('.qtd-caracteres')
const letraMaiu = document.querySelector('.chk-letMai')
const letMinu = document.querySelector('.chk-letMen')
const simbolos = document.querySelector('.chk-simb')


export function mostrarSenha() {
    let qtdC = qtdCaract.value 
    qtdC = qtdC <= 5 ? 6 : qtdC

    const maiusculas = letraMaiu.checked
    const minusculas = letMinu.checked
    const sbl = simbolos.checked

    divGerarSenha.innerText =  gerarSenha(qtdC, maiusculas, minusculas, sbl, true)
}