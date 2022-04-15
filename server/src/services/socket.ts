import { Server as HTTPServer } from 'http'
import { Server, Socket } from 'socket.io'
import { randomUUID } from 'crypto'
import ClientToServerEvents from '../events/ClientToServerEvents'
import ServerToClientEvents from '../events/ServerToClientEvents'
import Message from '../types/Message'
import DAO from './dao'

const db = new DAO()

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

    // https://socket.io/docs/v3/emit-cheatsheet/

    socket.on('message', (content: string) => {
      console.log(`MESSAGE\n  From: ${socket.id}\n  Content: ${content}`)

      const message: Message = {
        id: nextID(),
        user: {
          id: socket.id,
          name: 'Anonymous'
        },
        content
      }

      io.emit('message', message)
      db.createLog(message)
    })
  })
}

export default useSocket
