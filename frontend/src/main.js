import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import axios from 'axios'
import VueAxios from 'vue-axios'
app.use(VueAxios, axios)

  import Home from './views/Home.vue'
  import Login from './views/Login.vue'
  import Register from './views/Register.vue'
 
  const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register}
  ]
 
  import { createRouter, createWebHistory } from 'vue-router'
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
 
  app.use(router)

app.mount('#app')
