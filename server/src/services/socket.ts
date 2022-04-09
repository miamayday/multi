import { Server as HTTPServer } from 'http'
import { Server, Socket } from 'socket.io'

function useSocket(server: HTTPServer): void {
  const io = new Server(server, { cors: { origin: true } })

  io.on('connection', (socket: Socket) => {
    console.log('New connection:', socket.id)

    // https://socket.io/docs/v3/emit-cheatsheet/

    socket.on('message', (content: string) => {
      //socket.emit()
    })
  })
}

export default useSocket
