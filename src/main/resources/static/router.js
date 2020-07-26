import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import VueRouter from 'https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.esm.browser.js'
Vue.use(VueRouter)

import movieList from './views/movieList.js'
import addArticle from './views/addArticle.js'

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name:"movieList",
      path: '/', 
      component: movieList
    },
    {
      name: "addArticle",
      path: '/add-article',
      component: addArticle
    }
  ]
});