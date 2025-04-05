<script lang="ts">
import PersonagemComponent from '@/components/PersonagemComponent.vue';
import { Personagem } from '@/models/personag';
import { reactive } from 'vue';

// Renomeando a variável para evitar conflito com a classe Personagem
const personagensList: Array<Personagem> = reactive([]);

// Criando instâncias de Personagem
const luke: Personagem = reactive(new Personagem());
luke.name = "Luke Skywalker";
luke.gender = "Homem";
luke.height = "1,80m";
luke.mass = "80 Kg";

const vader: Personagem = reactive(new Personagem());
vader.name = "Darth Vader";
vader.gender = "Homem";
vader.height = "2,00m";
vader.mass = "90 Kg";

const leia: Personagem = reactive(new Personagem());
leia.name = "Princesa Léia";
leia.gender = "Mulher";
leia.height = "1,60m";
leia.mass = "65 Kg";

// Adicionando as instâncias à lista de personagens
personagensList.push(luke, vader, leia);
</script>

<template>
<main class="flex flex-column text-center justify-content-center align-items-center">
    <h1>Personagens</h1>
    <section class="personagens flex flex-column border-round-sm">
        <!-- Corrigindo o v-for para iterar sobre a lista de personagens -->
        <div v-for="(personagem, env_id) in personagensList" :key="env_id">
            <!-- Passando o personagem para o componente PersonagemComponent -->
            <PersonagemComponent :personagem="personagem"/>  
        </div>
    </section>
</main>
</template>
