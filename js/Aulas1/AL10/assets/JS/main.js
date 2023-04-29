class Calculadora {
    constructor() {
        const display = document.querySelector('.display')

        this.Iniciar = () => {
            cliqueBtns()
        }

        function cliqueBtns() {
            document.addEventListener('click', function (e) {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    adicionarAoDisplay(el.innerText)
                }
                else if (el.classList.contains('btn-del')) {
                    deletarUltimo()
                }
                else if (el.classList.contains('btn-clear')) {
                    limparDisplay()
                }
                else if (el.classList.contains('btn-igual')) {
                    realizarOperacao()
                }
            })
        }

        function adicionarAoDisplay(valor) {
            display.value += valor
        }

        function deletarUltimo() {
            display.value = display.value.slice(0, -1)
        }

        function limparDisplay() {
            display.value = ''
        }

        function realizarOperacao() {
            let realiza = true
            const simbolos = [
                '0',
                '1', '2', '3', '4',
                '5', '6', '7', '8', '9',
                '(', ')', '/', '+',
                '+', '-', '.', '*'
            ]


            const valor = display.value

            for (let i of valor) {
                if (simbolos.includes(i) == false) {
                    realiza = false
                    alert('Não é uma conta')
                    limparDisplay()

                }
            }

            if (realiza == true) display.value = eval(valor)
            
            }

        }
    }



const calculadora = new Calculadora
calculadora.Iniciar()
