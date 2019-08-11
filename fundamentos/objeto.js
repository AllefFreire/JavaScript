const prod1 = {}
prod1.nome = 'Celular do ano'
prod1.preco = 4998.9
prod1['Desconto legal'] = 0.4 // Evitar colocar chave com espaços...
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99,
    obj:{
        blabla: 1,
        obj2: {
            blabla2: 2
        }
    }
}
console.log(prod2)