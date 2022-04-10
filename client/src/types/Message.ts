import type User from './User'

interface Message {
  id: string
  user: User
  content: string
}

export default Message
