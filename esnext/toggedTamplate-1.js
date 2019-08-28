// Togged Tamplate - Proessa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

nome = 'lulu'
nota = 10

console.log(tag `${nome} é nota ${nota}`)