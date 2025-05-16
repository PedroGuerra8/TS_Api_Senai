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

<style scoped lang="scss">
    section{
        background-color: rgb(212, 221, 218);
        border: 1px solid gray;
        width: 10rem;
        height: 7.5rem;
        margin: 0.5rem;        
        .icons{
            width: 1.5rem;
            margin: 0.5rem;        
            color: rgb(87, 82, 82);    
        }

        .remove-container{
            width: 100%;
            height: 1rem;
            span{
                font-size: 0.85rem;
                cursor: pointer;
                &:hover{
                    transform: scale(1.25);
                    color: rgb(87, 18, 18);
                }
            }
        }
    }
    .device-buttons{
        border: none;
        padding: 0.6rem;
        border-radius: 0.2rem 0rem;   
        cursor: pointer;  
        &:hover{
          opacity: 0.6;  
          transform: scale(1.05);
          transition: 0.5s;        
        }   
    }        

    .device-true{
        .on-button{
            background-color: green;
        }
        .off-button{
            background-color: white;
        }
    }
    .device-false{
        .on-button{
            background-color: white;
        }
        .off-button{
            background-color: red;
        }
    }

</style>