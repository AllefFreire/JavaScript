//  ES8: Object.values & Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Lulu'
obj2 = {
    nome,
    ola() {
        return `Olá ${this.nome}`
    }
}
console.log(obj2)
console.log(obj2.ola())

//  Class
class Animal {}
class Cachorro extends Animal {
    fala() {
        return 'Cachorro'
    }
}

console.log(new Cachorro().fala())