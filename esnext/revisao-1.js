// Let e const
{
    var a = 1
    let b = 2
    console.log(b) // 2
}
console.log(a) // 1
// console.log(b) // Error


// Template String
const produto = 'Ipad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {nome, idade: i} = {
    nome: 'lulu',
    idade: 18
}
console.log(nome, i)