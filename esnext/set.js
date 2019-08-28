// nãa aceita repetição & não indexada
const times = new Set()
times.add('Corinthians')
times.add('Baiha')
times.add('Vasco')
times.add('Corinthians')
times.add('Flamengo')
times.add('Corinthians').add('Palmeiras') // É possível adcionar de forma encadeada.

console.log(times)
console.log(times.size)
console.log(times.has('Vasco')) // true
console.log(times.has('vasco')) // false
times.delete('Vasco')

const nomes = ['Allef', 'Lulu', 'Freire', 'Freire']
const nomesSet = new Set(nomes)
console.log(nomesSet)