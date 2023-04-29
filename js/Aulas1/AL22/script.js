console.clear()

const pessoa = [
    {ID: 3, nome: 'Renan'},
    {ID: 2, nome: 'Pedro'},
    {ID: 1, nome: 'João'}
]

const pessoas = new Map
for (const ps of pessoa) {
    const {ID} = ps
 
    pessoas.set(ID, {...ps})

}


for (const [identifier, {ID, nome}] of pessoas) {
    console.log(identifier, ID, nome)
}