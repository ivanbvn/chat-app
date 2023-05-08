const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dbConnection = require('./db/config')
require('dotenv').config()

// Levanto el servidor.
const app = express()

// Conecto base de datos.
dbConnection()

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/userRoutes')) // Usuarios
app.use('/api/messages', require('./routes/messageRoutes')) // Mensajes

module.exports = app



