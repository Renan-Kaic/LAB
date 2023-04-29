const resultado = document.querySelector('#resultado')
const btn = document.querySelector("#submit")
let vlps, vlal;

btn.addEventListener ('click', function(e) {
    e.preventDefault()
    vlps = document.querySelector('#peso').value
    vlal = document.querySelector('#altura').value

    let imc = vlps / (vlal * vlal)
    
    if (imc < 18.5) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`
    }
    else if (imc >= 18.5 && imc < 25) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} e você está no peso ideal.`
    }
    else if (imc >= 25 && imc < 30) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso.`
    }
    else if (imc >= 30 && imc < 35) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 1.`
    }
    else if (imc >= 35 && imc < 40) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 2.`
    }
    else if (imc >= 40) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 3.`
    }
    

})