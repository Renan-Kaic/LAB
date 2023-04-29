import { default as fetch } from "node-fetch";

let dados
function atribuiDados(ds) {
    dados = ds
    console.log(ds)
}

fetch('https://cep.awesomeapi.com.br/json/65606817')
    .then (response => response.json())
    .then (response => atribuiDados(response))

