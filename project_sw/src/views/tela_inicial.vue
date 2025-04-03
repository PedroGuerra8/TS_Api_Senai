<script lang="ts">
import { Personagem } from '@/models/personag';
import { reactive, ref } from 'vue';

const pessoa: Array<Personagem> = reactive([]);


const luke: Personagem = reactive(new Personagem());
luke.name = "Luke Skywalker";
luke.gender = "Homem";
luke.height = "1,80m";
luke.mass = "80 Kg"


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

</script>