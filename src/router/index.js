import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/imagen/show/:id',
      name: 'show-imagen2',
      component: () => import('../pages/show-imagen.vue')
    },  
    ...setupLayouts(routes)
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if (to.name == 'login' || to.name == 'register') {
    next()
  } else {
    if (localStorage.getItem('token')) {
      console.log(`navegando a: ${to.name}`)
      next()
    } else {
      next('login')
    }
  }
})
export default router
