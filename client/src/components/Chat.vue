<script setup lang="ts">
import { ref } from 'vue'
import type Message from '../types/Message'

interface Props {
  messages: Message[]
  sendMessage: (content: string) => void
}

const props = defineProps<Props>()

const userInput = ref('')

function submit() {
  if (userInput.value.length > 0) {
    props.sendMessage(userInput.value)
    userInput.value = ''
  }
}
</script>

<template>
  <div id="chat" class="border">
    <div id="message-list">
      <div class="re-order">
        <p
          v-for="(message, index) in props.messages"
          :key="message.id"
          :class="index % 2 === 0 ? 'dark' : 'light'"
        >
          <span class="username">{{ message.user.name }}:</span>
          <span>{{ message.content }}</span>
        </p>
      </div>
    </div>
    <div id="message-form">
      <input v-model="userInput" @keyup.enter="submit" />
      <button @click="submit">Send</button>
    </div>
  </div>
</template>

<style>
#chat {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  max-height: 300px;
  min-height: 140px;
  height: 100%;
}

#message-list {
  display: flex;
  overflow: auto;
  flex-direction: column-reverse;
  flex-grow: 1;
}

#message-list .re-order {
  display: flex;
  flex-direction: column;
}

#message-list p.dark {
  background-color: #f5f5f5;
}

#message-list span.username {
  margin-right: 0.6em;
}

#message-form {
  display: flex;
  flex-direction: row;
}

#message-form input {
  flex-grow: 1;
  border: 0;
  border-top: 1px solid var(--border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#message-form button {
  border: 0;
  border-top: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
}

#chat ::-webkit-scrollbar-track,
#chat ::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0;
  border-radius: 0;
}
</style>
