const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log('Contador A e B:', contadorB.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log('Contador C:', contadorC.valor)

contadorD.inc()
contadorD.inc()
contadorD.inc()
contadorD.inc()
console.log('Contador D:', contadorD.valor)
