<script setup lang="ts">
  import {ref, computed} from 'vue';
  

  import { RouterLink, RouterView, useRouter } from 'vue-router'
  import Personagem from './components/Personagem.vue';

const router = useRouter();

const buttonRoutes = computed(() =>
  router.currentRoute.value.name === 'personagens'?
  'Personagem': 'Personagens')

const changePage = ()=> {
  if(router.currentRoute.value.name === 'personagens'){
    router.push('/personagens')
  }
}
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
