class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        return console.log(`Meu nome é ${this.nome}`)
    }
}

p1 = new Pessoa('Allef')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

 p2 = criarPessoa('Allef')
 p2.falar()