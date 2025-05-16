<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const loggedIn = ref(false);

const login = () => {
  if (username.value === 'pedro' && password.value === 'pedro') {
    loggedIn.value = true;
  } else {
    alert('Usuário ou senha incorretos');
  }
};
</script>

<template>
  <div v-if="!loggedIn" class="p-4 max-w-md mx-auto">
    <h2 class="text-xl font-semibold mb-4">Login</h2>
    <input v-model="username" type="text" placeholder="Usuário" class="border p-2 w-full mb-2" />
    <input v-model="password" type="password" placeholder="Senha" class="border p-2 w-full mb-2" />
    <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Entrar</button>
  </div>

  <div v-else class="p-4 text-center">
    <h2 class="text-green-600 text-xl font-bold">Bem-vindo, {{ username }}!</h2>
    <!-- Aqui você pode renderizar a próxima parte do app -->
  </div>
</template>
