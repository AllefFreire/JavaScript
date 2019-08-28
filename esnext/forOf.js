for (let letra of 'Allef') {
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promise']
for (let assunto of assuntoEcma) {
    console.log(assunto)
} // Valores

for (let indice in assuntoEcma) {
    console.log(indice)
} // indices

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for ([ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}