import Message from '../types/Message'

interface ServerToClientEvents {
  message: (message: Message) => void
}

export default ServerToClientEvents
