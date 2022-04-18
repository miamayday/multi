<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  inputId?: string
  prompt: string
  submit: (value: string) => void
}

const props = defineProps<Props>()

const userInput = ref('')

function onSubmit() {
  if (userInput.value.length > 0) {
    props.submit(userInput.value)
    userInput.value = ''
  }
}
</script>

<template>
  <div class="in-btn">
    <input :id="inputId" v-model="userInput" @keyup.enter="onSubmit" />
    <button @click="onSubmit">{{ prompt }}</button>
  </div>
</template>

<style>
.in-btn {
  display: flex;
  flex-direction: row;
}

.in-btn input,
.in-btn button {
  border: 1px solid #bfbfbf;
  border-radius: 3px;
  line-height: 1.25rem;
}

.in-btn input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  flex-grow: 2;
}

.in-btn input:focus {
  outline: none;
}

.in-btn button {
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #f0f0f0;
  color: #575757;
  transition: 0.4s;
}

.in-btn button:hover {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 0.2);
  color: hsla(160, 100%, 12%, 0.7);
}
</style>
