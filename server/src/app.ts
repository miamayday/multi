import router from './services/router'
import useSocket from './services/socket'

const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

app.use('/', router)

useSocket(server)

server.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})
