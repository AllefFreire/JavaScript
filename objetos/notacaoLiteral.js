const a = 1
const b = 2
const c = 3

const obj = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj,obj2)

const nomeAtrr = 'nota'
const nota = 7.5
obj3 = {}
obj3[nomeAtrr] = nota
obj4 = {[nomeAtrr]: nota}
console.log(obj3, obj4)

obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() {
        //..
    }
}

console.log(obj5)