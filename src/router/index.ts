import { createRouter, createWebHistory } from 'vue-router'


import CadastroComponentView from '@/views/CadastroComponentView.vue'
import LoginComponentView from '@/views/LoginComponentView.vue'
import TelaInicialView from '@/views/TelaInicialView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Cadastro',
      name: 'CadastroComponent',
      component: CadastroComponentView
    },
    {
      path: '/Login',
      name: 'LoginComponent',
      component: LoginComponentView
    },
    {
      path: '/TelaInicial',
      name: 'TelaInicial',
      component: TelaInicialView
    },
  ],
})

export default router
