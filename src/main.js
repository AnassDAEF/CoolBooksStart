import Vue       from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/css/font-face.css';
import '@/assets/css/all.min.css';

import '@/assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
import '@/assets/vendor/font-awesome-5/css/fontawesome-all.min.css';

import '@/assets/vendor/mdi-font/css/material-design-iconic-font.min.css';

import '@/assets/css/theme.css';
import VueRouter from 'vue-router'
import App       from './App.vue'


Vue.use(VueRouter)

const routes = [
  {
      path: '/home', name:'home',
      component: () => import('./components/BooksList.vue')
  },
  {
    path: '/books', name:'books',
    component: () => import('./components/BooksList.vue')
  },
  {
    path: '/books/:bookId', name:'booksDetails',
    component: () => import('./components/BooksDetails.vue')
  },
  {
    path: '/genres', name:'genres',
    component: () => import('./components/BooksGenresList.vue')
  },
  {
    path: '/admin', name:'admin',
    component: () => import('./components/BooksAdmin.vue')
  },
  {
    path: '/admin/books/:id?', name:'adminBooksAction',
    component: () => import('./components/BooksAdminBooksAction.vue')
  },

  {
    path: '/admin/bookslist', name:'adminBooksList',
    component: () => import('./components/BooksAdminBooksList.vue')
  },
  {
    path: '/admin/genres/:id?', name:'adminGenresAction',
    component: () => import('./components/BooksAdminGenresAction.vue')
  },
  {
    path: '/admin/genres', name:'adminGenresList',
    component: () => import('./components/BooksAdminGenresList.vue')
  },

]

const router = new VueRouter({
  routes,
  mode : 'history',
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
