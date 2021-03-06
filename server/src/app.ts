const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

import router from './services/router'
app.use('/', router)

import useSocket from './services/socket'
useSocket(server)

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
})
