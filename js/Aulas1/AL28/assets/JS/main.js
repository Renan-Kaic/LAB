class ValidarFormulario {
    constructor () {
        this.formulario = document.querySelector(".formulario")
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            const el = e.target

            this.handleSubmit(e)
        })  
    }

    handleSubmit(event) {
        event.preventDefault()

        const eValido = this.validarCampos()
    }

    validarCampos() {
        const senha = document.querySelector('.senha').value
        const senhaConfirmacao = document.querySelector('.senha-confirmacao').value
 

        let valid = true


        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.campos')) {
            const label = campo.previousElementSibling.innerText

            if (!campo.value) {
                this.criaErro(campo, `O campo "${label}" não pode estar vazio.`)
            }

            if (label === 'Senha' && campo.value.length < 6) {
                this.criaErro(campo, `A senha deve ter mais de 6 dígitos.`)
            }

            if (campo.classList.contains('senha-confirmacao') && senha !== senhaConfirmacao) {
                this.criaErro(campo, 'A senhas devem ser iguais')
    
            }

        }
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}


const valida = new ValidarFormulario()
