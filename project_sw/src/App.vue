<script setup lang="ts">
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import Personagem from './components/PersonagemComponent.vue';

  const router = useRouter();

  const buttonRoutes = computed(() => {
    return router.currentRoute.value.name === 'personagens' ? 
    'Personagem' : 'Not Found';
  });

  const changePage = () => {
    // Verifica se o usuário já está na página "personagens" e redireciona se não estiver
    if (router.currentRoute.value.name !== 'personagens') {
      router.push('/personagens');
    }
    else{
      router.push('/:pathMatch(.*)*');
    }
  };

  const mostrarPersonagem = () => {
    {{ Personagem.name }}
  };

  
</script>

<template>
  <button @click="changePage">Página {{ buttonRoutes }}</button>
  <RouterView />

  <button @click="mostrarPersonagem">Personagem </button>
</template>

<style scoped>
header {
  line-height: normal;
  max-height: 100vh;
}
</style>
