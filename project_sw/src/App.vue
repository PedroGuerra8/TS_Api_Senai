<script setup lang="ts">
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const buttonRoutes = computed(() => {
    return router.currentRoute.value.name === 'personagens' ? 'Personagem' : 'Personagem';
  });

  const changePage = () => {
    // Verifica se o usuário já está na página "personagens" e redireciona se não estiver
    if (router.currentRoute.value.name !== 'personagens') {
      router.push('/personagens');
    }
  };
</script>

<template>
  <button @click="changePage">Página {{ buttonRoutes }}</button>
  <RouterView />
</template>

<style scoped>
header {
  line-height: normal;
  max-height: 100vh;
}
</style>
