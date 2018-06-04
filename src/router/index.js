import Vue from 'vue'
import Router from 'vue-router'
import Romanos from '@/components/romanos'
import Pick from '@/components/pick'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/romanos',
      name: 'Romanos',
      component: Romanos
    },
    {
      path: '/pick',
      name: 'Pick',
      component: Pick
    }
  ]
})
