// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome:'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'rua 123'
delete pessoa.nome
console.log(pessoa.nome)

pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)