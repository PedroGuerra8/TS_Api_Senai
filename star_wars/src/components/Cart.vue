<!-- src/components/Cart.vue -->
<script setup lang="ts">
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
