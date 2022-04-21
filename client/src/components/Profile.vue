<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  username: string
  changeUsername: (username: string) => void
}

const props = defineProps<Props>()

const showForm = ref(false)
const userInput = ref('')

function submit() {
  if (userInput.value.length > 0) {
    props.changeUsername(userInput.value)
    userInput.value = ''
    toggle()
  } else {
    shake()
  }
}

function shake() {
  document.querySelector('#profile button.confirm')?.classList.add('shake')
  setTimeout(() => {
    document.querySelector('#profile button.confirm')?.classList.remove('shake')
  }, 820)
}

function toggle() {
  showForm.value = !showForm.value
}
</script>

<template>
  <div id="profile">
    <p>
      <span>Logged in as </span
      ><span class="username">{{ props.username }}</span>
    </p>
    <div v-if="showForm">
      <div>
        <input
          v-model="userInput"
          @keyup.enter="submit"
          placeholder="New username"
        />
      </div>
      <div class="center">
        <button @click="toggle">Cancel</button>
        <button class="confirm" @click="submit">Submit</button>
      </div>
    </div>
    <button v-if="!showForm" @click="toggle">Change username</button>
  </div>
</template>

<style>
#profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#profile p {
  margin-bottom: 1em;

  text-align: center;
}

#profile input {
  margin-bottom: 1em;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* https://css-tricks.com/snippets/css/shake-css-keyframe-animation/ */

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
