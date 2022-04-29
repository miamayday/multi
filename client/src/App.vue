<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { addEventListener, sendEvent, SOCKET_ENDPOINT } from './services/socket'
import type Message from './types/Message'
import Main from './components/Main.vue'

const messages: Ref<Array<Message>> = ref([])
const username = ref('Anonymous')

addEventListener('connect', () => {
  console.log('Connected to', SOCKET_ENDPOINT)
})

addEventListener('disconnect', () => {
  console.log('Disconnected from', SOCKET_ENDPOINT)
})

addEventListener('message', (message: Message) => {
  messages.value.push(message)
})

function sendMessage(content: string) {
  sendEvent('message', content)
}

function changeUsername(value: string) {
  sendEvent('username', value)
  username.value = value
}
</script>

<template>
  <Main
    :username="username"
    :changeUsername="changeUsername"
    :messages="messages"
    :sendMessage="sendMessage"
  />
</template>

<style>
@import './assets/base.css';
</style>
