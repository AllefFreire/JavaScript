const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástioco', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 2400
}))


const produtosFrageis = p => p.fragil
const produtosCaros = p => p.preco >= 500

let resultado = produtos.filter(produtosCaros).filter(produtosFrageis)

console.log(resultado)