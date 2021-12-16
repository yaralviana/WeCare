const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const brandsRoutes = require('./routes/brandsRoutes')

app.use(cors())
app.use(express.json())
app.use("/brands", brandsRoutes)

db.connect()

app.get('/', (req, res) => {
    res.send('Projeto: WeCare - Cadastra, atualiza e filtra marcas/empresas que não testam em animais! 🐇')
})

module.exports = app