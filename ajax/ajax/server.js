const BodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')

const app = express()

// middle
app.use(express.static('.'))
app.use(BodyParser.urlencoded({ extended: true }))
app.use(BodyParser.json())

// rotas
app.get('/test', (req, res) => {
    res.send('ok')
})

app.listen(3333)