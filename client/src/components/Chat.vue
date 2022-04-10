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
  props.sendMessage(content.value)
  content.value = ''
}
</script>

<template>
  <main>
    <div id="message-list">
      <div class="ordered">
        <p v-for="message in props.messages" :key="message.id">
          <strong>{{ message.user.id }}:</strong> {{ message.content }}
        </p>
      </div>
    </div>
    <div id="message-form">
      <input v-model="content" />
      <button @click="submit">Send</button>
    </div>
  </main>
</template>

<style></style>
