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
      <div class="order">
        <p
          v-for="(message, index) in props.messages"
          :key="message.id"
          :class="index % 2 === 0 ? 'dark' : 'light'"
        >
          <span class="username">{{ message.user.name }}</span>
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
  height: 300px;
  max-width: 500px;
}

#message-list {
  display: flex;
  overflow: auto;
  flex-direction: column-reverse;
  flex-grow: 1;
}

.order {
  display: flex;
  flex-direction: column;
}

#message-list p.dark {
  background-color: #f5f5f5;
}

.username {
  margin-right: 0.8em;

  font-weight: bold;
  font-style: italic;
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
