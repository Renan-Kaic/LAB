function criarPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,

        fala: (assunto) => {
            return `${nome} está ${assunto}.` 
        } 

    }
}