// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Allef',
    idade: 20,
    peso: 76,
    endereço: {
        rua: 'Pedro Alves Cabral',
        Numero: 1225
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)