interface ClientToServerEvents {
  message: (content: string) => void
  username: (username: string) => void
}

export default ClientToServerEvents
