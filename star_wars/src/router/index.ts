import { createRouter, createWebHistory } from 'vue-router'
import Personagem from '@/views/Personagem.vue'
import NotFound from '@/views/NotFound.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(), // <- mais seguro assim
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/personagens',
      name: 'personagem',
      component: Personagem,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
