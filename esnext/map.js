const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
console.log(tecnologias.rect) // undefined
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([
    [function() {}, 'funcao'],
    [{}, 'objeto'],
    [123, 'número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size) // retorna o número de elementos