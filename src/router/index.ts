import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './guard'
import routes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(authGuard);

export default router
