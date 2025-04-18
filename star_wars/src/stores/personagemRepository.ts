import { defineStore } from "pinia";
import { Personagem } from "@/models/personagens";

export type PersonagemRepository = {
    personagens: Array<Personagem>
}

export const usePersonagemRepository = defineStore("personagem-repository",{
    state: (): PersonagemRepository => ({
        personagens: []
    }),
    actions: {
        addPersonagem(newPersonagem: Personagem){
            const deepCopy = JSON.parse(JSON.stringify(newPersonagem));
            this.personagens.push(deepCopy);
        },
        removePersonagem(name: string){            
            const index = this.personagens.findIndex(env => env.name === name);
            if(index >= 0){                
                this.personagens.splice(index,1);
            }
        }
    },
    getters: {

    }
})