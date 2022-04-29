<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type Message from '../types/Message'
import Chat from './Chat.vue'
import Profile from './Profile.vue'

interface Props {
  // Profile
  username: string
  changeUsername: (username: string) => void
  // Chat
  messages: Message[]
  sendMessage: (content: string) => void
}

defineProps<Props>()
</script>

<template>
  <div id="main">
    <div class="wrapper">
      <Profile :username="username" :changeUsername="changeUsername" />
      <Chat :messages="messages" :sendMessage="sendMessage" />
    </div>
  </div>
</template>

<style>
/* CSS Properties Grouping & Order
1. Positioning
2. Display & Box Model
3. Color
4. Text
5. Other */

#main {
  width: 100%;
  height: 100vh;
  padding: 2rem;
}

#main .wrapper {
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 100%;
}

#main #profile {
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  #main .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #main #profile {
    margin-right: 4rem;
  }

  #main #chat {
    width: 500px;
  }
}
</style>
