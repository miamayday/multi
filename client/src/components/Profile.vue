<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  changeUsername: (username: string) => void
}

const props = defineProps<Props>()

const showForm = ref(false)

function submit(value: string) {
  props.changeUsername(value)
  const input = document.getElementById('username-input')
  input?.blur()
}

function toggle() {
  showForm.value = !showForm.value
}
</script>

<template>
  <div id="profile">
    <img src="../assets/user.png" />
    <p>Logged in as Anonymous</p>
    <div v-if="showForm">
      <div>
        <input placeholder="New username" />
      </div>
      <div class="center">
        <button class="red">Cancel</button>
        <button>Submit</button>
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
