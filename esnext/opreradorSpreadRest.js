// Operador ... Rest(juntar)/Spread(seprar)
// usar rest com parametro em função

// Usar spread com objetos
const funcionarios = {nome: 'maria', salario: 12348.99}
const clone = {ativo: true, ...funcionarios}
console.log(funcionarios, clone)

//  Usar o spread com array
const grupoA = ['joão', 'Pedro', 'Gloria']
const grupoB = ['Maria', ...grupoA]
console.log(grupoA, grupoB)