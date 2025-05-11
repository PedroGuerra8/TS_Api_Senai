<script setup lang="ts">
    import Cart from '@/components/Cart.vue';
    import { Personagem } from '@/models/personagens';
    import { reactive, ref } from 'vue';


    const personagens: Array<Personagem> = reactive([]);

    const luke: Personagem = reactive(new Personagem());
    luke.name = 'Luke Skywalker';
    luke.idade = "20";
    
</script>

<template>    
    <main class="flex flex-column text-center justify-content-center align-items-center">
        <h1>Personagens</h1>
        <section class="personagens flex flex-column border-round-sm">
            <div v-for="(personagem, env_id) in personagens" :key="env_id">
                <Personagem :personagem="personagem"/>
            </div> 
        </section>
    </main>
</template>


<style scoped lang="scss">
    main{
        width: 100vw;
        min-height: 100vh;
        .personagens{
            width: 90vw;
            min-height: 95vh;
            background-color: rgb(206, 160, 160);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
</style>