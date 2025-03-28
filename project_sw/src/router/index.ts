import { createRouter, createWebHistory } from 'vue-router'
import { Personagem } from '@/models/personag'
import Not_found from '@/views/not_found.vue';
import Gerenciamento from '@/views/Gerenciamento.vue';

const router = createRouter({
  history: createWebHistory((import.meta.env.BASE_URL)),
  routes: [
    {
      component: Personagem,
      path: '/personagens',
      name: 'personagens'
    },
    {
      component: Not_found,
      path: '/:pathMatch(.*)*'
    },
    {
      component: Gerenciamento,
      path: '/management',
      name: 'Gerenciamento',
    }
  ]
})

export default router