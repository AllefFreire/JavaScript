function criarProduto(nome, preco) {
    desconto = (preco*.1)
    return {
        nome,
        preco: preco - desconto,
        desconto
    }
}

console.log(criarProduto(nome='celular', preco=100))