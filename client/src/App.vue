<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { addEventListener, sendEvent, SOCKET_ENDPOINT } from './services/socket'
import type Message from './types/Message'
import Chat from './components/Chat.vue'
import Profile from './components/Profile.vue'

const messages: Ref<Array<Message>> = ref([])
const username = ref('Anonymous')

addEventListener('connect', () => {
  console.log('Connected to', SOCKET_ENDPOINT)
})

addEventListener('disconnect', () => {
  console.log('Disconnected from', SOCKET_ENDPOINT)
})

addEventListener('message', (message: Message) => {
  messages.value.push(message)
})

function sendMessage(content: string) {
  sendEvent('message', content)
}

function changeUsername(value: string) {
  sendEvent('username', value)
  username.value = value
}
</script>

<template>
  <!--<header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>-->

  <main>
    <Profile :username="username" :changeUsername="changeUsername" />
    <Chat :messages="messages" :sendMessage="sendMessage" />
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  height: 100vh;
  padding: 2rem;

  font-weight: normal;
}

main {
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 100%;
}

main #profile {
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  main #profile {
    margin-right: 4rem;
  }

  main #chat {
    width: 500px;
  }
}

/*main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}*/

/*header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}*/
</style>
