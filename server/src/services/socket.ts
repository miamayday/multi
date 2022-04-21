import { Server as HTTPServer } from 'http'
import { Server, Socket } from 'socket.io'
import { randomUUID } from 'crypto'
import ClientToServerEvents from '../events/ClientToServerEvents'
import ServerToClientEvents from '../events/ServerToClientEvents'
import Message from '../types/Message'
import User from '../types/User'
import DAO from './dao'

const db = new DAO()

const users = new Map<string, string>()

function nextID(): string {
  return randomUUID()
}

function useSocket(server: HTTPServer): void {
  const io: Server<ClientToServerEvents, ServerToClientEvents> = new Server(
    server,
    { cors: { origin: true } }
  )

  io.on('connection', (socket: Socket) => {
    console.log('New connection:', socket.id)

    users.set(socket.id, 'Anonymous')

    // https://socket.io/docs/v3/emit-cheatsheet/

    socket.on('message', (content: string) => {
      console.log(`MESSAGE\n  From: ${socket.id}\n  Content: ${content}`)

      const message: Message = {
        id: nextID(),
        user: {
          id: socket.id,
          name: users.get(socket.id) || 'Anonymous'
        },
        content
      }

      io.emit('message', message)
      db.createLog(message)
    })

    socket.on('username', (username: string) => {
      console.log(`USERNAME\n  From: ${socket.id}\n  Content: ${username}`)

      users.set(socket.id, username)
    })
  })
}

export default useSocket
