<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Cart from '@/components/Cart.vue'

interface Personagem {
  name: string
  idade: string
  image: string
}

const personagens = ref<Personagem[]>([])

onMounted(async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/')
    const data = await res.json()
    personagens.value = data.results
  } catch (err) {
    console.error('Erro ao buscar personagens:', err)
  }
})
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <Cart
      v-for="(p, i) in personagens"
      :key="i"
      :name="p.name"
      :idade="p.idade"
      :image="p.image"
    />
  </div>
</template>
