<script setup lang="ts">
import { Personagem } from '@/models/personag';

// Corrigindo o tipo da prop 'person' para ser uma instância de Personagem
const props = defineProps({
    person: { type: Personagem, required: true },
    showButtons: { type: Boolean, default: true }
});

const changeDevice = (newState: string) => {
    // Agora TypeScript sabe que `props.person` tem a propriedade `name`
    props.person.name = newState;
};
</script>

<template>
    <section 
     :class="`flex flex-column text-center align-items-center 
        justify-content-start device-${props.person.name}`">
        <div v-if="!props.showButtons" class="remove-container flex mt-2 justify-content-end align-items-center">
            <span class="icons material-icons-round ">delete</span> 
        </div>
        <div>
            <h5>{{props.person.gender}}</h5>   
            <span class="icons material-icons-round">{{ props.person.personagens }}</span> 
            <div class="flex flex-row" v-if="props.showButtons">
                <button class="device-buttons on-button mr-1" @click="changeDevice('ON')">ON</button>
                <button class="device-buttons off-button" @click="changeDevice('OFF')">OFF</button>
            </div>
        </div>
    </section>
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
                    color: red;
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
