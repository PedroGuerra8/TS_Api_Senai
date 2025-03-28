import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { Personagem } from '@/models/personag';

export type Personagens = {
  personagem: Array<Personagem>
}

export const useRepositorioPeople = defineStore("people-repository",{
  state: (): Personagens => ({
    personagem: []
  }),
  actions: {
    addPersonagem(newPersonagem: Personagem){
      const deepCopy = JSON.parse(JSON.stringify(newPersonagem));
      this.personagem.push(deepCopy);
    },
    removePersonagem(name: string){
      const index = this.personagem.findIndex(env => env.name === name);
      if(index >= 0){
        this.personagem.splice(index,1);
      }
    }
  },
  getters: {
    
  }
})