const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const brandsRoutes = require('./routes/brandsRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/brands", brandsRoutes)

db.connect() 

module.exports = app