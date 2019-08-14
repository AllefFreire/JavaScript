// usando a notação literal
const obj1 = {}
console.log(obj1)

// objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funçoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesc = _ => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, .15)
const p2 = new Produto('Notebook', 2998.99, .25)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 5000, 10)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna um objeto....
const fromJSON = JSON.parse('{"info": "Eu sou um JSON"}')
console.log(fromJSON.info)