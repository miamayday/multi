<script setup lang="ts">
import { type PropType, ref } from 'vue'
import type Message from '../types/Message'

const props = defineProps({
  messages: {
    type: Array as PropType<Array<Message>>,
    required: true
  },
  sendMessage: {
    type: Function as PropType<(content: string) => void>,
    required: true
  }
})

const content = ref('')

function submit() {
  if (content.value.length > 0) {
    props.sendMessage(content.value)
    content.value = ''
  }
}
</script>

<template>
  <div id="chat">
    <div id="message-list">
      <div class="ordered">
        <p v-for="message in props.messages" :key="message.id">
          {{ message.user.id }}: {{ message.content }}
        </p>
      </div>
    </div>
    <div id="message-form">
      <input v-model="content" @keyup.enter="submit" />
      <button @click="submit">Send</button>
    </div>
  </div>
</template>

<style>
#chat {
  display: flex;
  flex-direction: column;
  height: 300px;
  max-width: 500px;
  margin: 0 auto;
}

#message-list {
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  flex-grow: 2;
  max-height: 300px;
  margin: 8px;
}

.order-content {
  display: flex;
  flex-direction: column;
}

#message-form {
  display: flex;
  flex-direction: row;
  margin: 8px;
}

#message-form input {
  flex-grow: 2;
}

#message-form button {
  margin-left: 4px;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background: #fff;
}

::-webkit-scrollbar-track {
  -webkit-border-radius: 6px;
  border-radius: 6px;
  background: #e8e8e8;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 6px;
  border-radius: 6px;
  background: #d4d4d4;
}
</style>
