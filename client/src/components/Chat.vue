<script setup lang="ts">
import type Message from '../types/Message'
import InputButton from './InputButton.vue'

interface Props {
  messages: Message[]
  sendMessage: (content: string) => void
}

const props = defineProps<Props>()

function submit(value: string) {
  props.sendMessage(value)
}
</script>

<template>
  <div id="chat">
    <div id="message-list">
      <div class="ordered">
        <p v-for="message in props.messages" :key="message.id">
          {{ message.user.name }}: {{ message.content }}
        </p>
      </div>
    </div>
    <InputButton prompt="Send" :submit="submit" />
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
  margin-bottom: 8px;
}

.order-content {
  display: flex;
  flex-direction: column;
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
