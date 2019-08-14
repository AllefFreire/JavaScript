class Lacamento {
    constructor(nome = 'Génerico',valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class Ciclofinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lacamentos = []
    }

    addLancamentos(...lacamentos) {
        lacamentos.forEach(l => this.lacamentos.push(l))
    }

    sumario() {
        let valorConsolidado= 0
        this.lacamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lacamento('Salário', 45000)
const contaDeLuz= new Lacamento('luz', -220)

const contas = new Ciclofinanceiro(6, 2019)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())