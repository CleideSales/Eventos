import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Eventos from '../views/Eventos.vue';
import Colaborador from '../views/Colaborador.vue';
import Cadastro from '../views/Cadastro.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/eventos', component: Eventos },
  { path: '/colaborador', component: Colaborador },
  { path: '/cadastro', component: Cadastro }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
