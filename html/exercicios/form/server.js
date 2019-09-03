const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
	extended: true
}))

app.post('/usuarios', (req, res) => {
	console.log(req.body) //Para metodo POST
//	console.log(req.query) // Para metodo GET
	res.send('<h1>Parabéns</h1>')
})

app.post('/usuarios/:id', (req, res) => {
	console.log(req.params.id)
	res.send('<h1>Parabéns. Usuário Alterado.</h1>')
})

app.get('/usuarios', (req, res) => {
	res.send('<h1>Bem-vindo</h1>')
})

app.listen(3003)
