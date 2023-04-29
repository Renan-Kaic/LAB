function criaCalculadora() {
    
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBtns()
        },
        cliqueBtns () {
            
            document.addEventListener('click', function(e) {
                const el = e.target
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                else if (el.classList.contains('btn-del')) {
                    this.apagarUltimo()
                }
                else if (el.classList.contains('btn-igual')) {
                    this.realizaConta()
                }
                else if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

            }.bind(this)
            )
        },
    
        clearDisplay() {
            this.display.value = ''
        },
        apagarUltimo() {
           this.display.value = this.display.value.slice(0, -1)
        },
        realizaConta() {
            const valor = this.display.value
            
            try {
                conta = eval(valor)

                if (!conta) {
                    alert('Conta invalida')
                    this.display.value = ''
                    return
                }
                this.display.value = conta
            }
            catch(e) {
                alert('Conta invalida')
                this.display.value = ''
                return
            }
        },
        btnParaDisplay(valor){
            
            this.display.value += valor
            
        },
    }

}

const calculadora = criaCalculadora()
calculadora.inicia()

