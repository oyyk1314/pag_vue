import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/dataset',
      component: () => import('@/views/dataset')
    },
    {
      path: '/upload',
      component: () => import('@/views/fileUpload')
    },
    {
      path: '/search',
      component: () => import('@/views/search')
    },

  ]
})
