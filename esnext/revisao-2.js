// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Params Default
function logg(texto = 'Node') {
    return console.log(texto)
}
logg()

// operador rest
function total(...numeros) {
    total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5,6,7,8,9))