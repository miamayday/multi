import Message from '../types/Message'

interface ServerToClientEvents {
  connect: () => void
  disconnect: () => void
  message: (message: Message) => void
}

export default ServerToClientEvents
