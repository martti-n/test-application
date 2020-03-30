import Vue from 'vue'
import VueRouter from 'vue-router'


import ListUsers from './components/user/ListUsers.vue'
import SigninPage from './components/signin.vue'
import CreateUser from './components/user/CreateUser.vue'
import EditUser from './components/user/EditUser.vue'

Vue.use(VueRouter)

const routes = [

  { path: '/signin', component: SigninPage },
  { path: '/listUsers', component: ListUsers, 
  beforeEnter(to, from, next) {
    if(localStorage.token) {
      next()
    } else {
      next('/signin')
      alert('Sign in to access this page!')
    }
  } },
  { path: '/createUser', component: CreateUser, 
  beforeEnter(to,from,next) {
    if(localStorage.token) {
      next()
    } else {
      next('/signin')
      alert('Sign in to access this page!')
    }
  }},
  { path: '/editUser/:id', component: EditUser,name: 'userEdit',
  beforeEnter(to, from, next) {
    if(localStorage.token) {
      next()
    } else {
      next('/signin')
      alert('Sign in to access this page!')
    }
  }},
  { path: '*', redirect: '/signin'}
  
]

export default new VueRouter({mode: 'history', routes})