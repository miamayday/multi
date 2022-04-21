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
  }
}

function toggle() {
  showForm.value = !showForm.value
}
</script>

<template>
  <div id="profile">
    <img src="../assets/user.png" />
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

#profile img {
  width: 128px;
  height: 128px;
  margin-bottom: 1em;
}

#profile p {
  margin-bottom: 1em;

  color: #494949;

  text-align: center;
}

#profile input {
  margin-bottom: 1em;
}

#profile button {
}
</style>
