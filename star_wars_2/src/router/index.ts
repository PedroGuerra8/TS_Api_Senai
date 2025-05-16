import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import Personagem from '@/views/Personagem.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
