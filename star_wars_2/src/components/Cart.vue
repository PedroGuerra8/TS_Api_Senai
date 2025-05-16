<script setup lang="ts">
import { Cart } from '@/models/personagens';
import { Personagem } from '@/models/personagens';

defineProps<{
  name: string
  idade: string
  image: string
}>()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4 m-4 w-64 text-center">
    <h2 class="text-xl font-bold mb-2">{{ name }}</h2>
    <p>Idade: {{ idade }}</p>
    <p>Imagem: {{ image }}</p>
  </div>
</template>

<style>

</style>
