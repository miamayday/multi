import { io, Socket } from 'socket.io-client'
import type ServerToClientEvents from '../events/ServerToClientEvents'
import type ClientToServerEvents from '../events/ClientToServerEvents'
import type { EventNames, EventParams } from '@socket.io/component-emitter'

export const SOCKET_ENDPOINT = 'http://localhost:3000/'

const localIP = 'localhost'
const networkIP = '0.0.0.0'

const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
  io(SOCKET_ENDPOINT)

type ServerEvent = EventNames<ServerToClientEvents>
type EventListener = (...args: any[]) => void

type ClientEvent = EventNames<ClientToServerEvents>
type ClientParams = EventParams<ClientToServerEvents, ClientEvent>

export function addEventListener(event: ServerEvent, listener: EventListener) {
  socket.on(event, listener)
}

export function sendEvent(event: ClientEvent, ...args: ClientParams) {
  socket.emit(event, ...args)
}
