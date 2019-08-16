const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primero
console.log(pilotos)

pilotos.unshift('hemilton')
console.log(pilotos)

// splice pode adicionar e remover

// Adcionar elemento
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elementos
pilotos.splice(3, 1)
console.log(pilotos)

const AlgunsPilotos1 = pilotos.slice(2)  // novo array
console.log(AlgunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)