require('./global')

console.log(minhaApp.saudacao())
console.log(minhaApp.nome)

minhaApp.nome = 'Eita!!' // O perigo de ter variaveis globais. Uma solução é qnd criar o objeto adcionar  a função freeze
console.log(minhaApp.nome)