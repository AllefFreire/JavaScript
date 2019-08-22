const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chines = china => china.pais === 'China'
const mulheres = m => m.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return funcAtual.salario < func.salario ? funcAtual : func
}

axios.get(url).then(res => {
    const funcionarios = res.data
    // console.log(funcionarios)
    console.log(funcionarios.filter(chines).filter(mulheres).reduce(menorSalario))
})
