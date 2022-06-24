import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ComoJugar from '../views/ComoJugar.vue'
import ElegirDificultad from '../views/ElegirDificultad.vue'
import Facil from '../views/Facil.vue'
import Normal from '../views/Normal.vue'
import Dificil from '../views/Dificil.vue'
import ColocarNormal from '../views/ColocarNormal.vue'
import VerRompecabezasNormal from '../views/VerRompecabezasNormal.vue'
import ColocarDificil from '../views/ColocarDificil.vue'
import VerRompecabezasDificil from '../views/VerRompecabezasDificil.vue'
import Configuracion from '../views/Configuracion.vue'




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ComoJugar',
    name: 'ComoJugar',
    component: ComoJugar
  },
  {
    path: '/ElegirDificultad',
    name: 'ElegirDificultad',
    component: ElegirDificultad
  },
  {
    path: '/Facil',
    name: 'Facil',
    component: Facil
  },
  {
    path: '/Normal',
    name: 'Normal',
    component: Normal
  },
  {
    path: '/Dificil',
    name: 'Dificil',
    component: Dificil
  },
  {
    path: '/ColocarNormal',
    name: 'ColocarNormal',
    component: ColocarNormal
  },
  {
    path: '/VerRompecabezasNormal',
    name: 'VerRompecabezasNormal',
    component: VerRompecabezasNormal
  },
  {
    path: '/ColocarDificil',
    name: 'ColocarDificil',
    component: ColocarDificil
  },
  {
    path: '/VerRompecabezasDificil',
    name: 'VerRompecabezasDificil',
    component: VerRompecabezasDificil
  },
  {
    path: '/Configuracion',
    name: 'Configuracion',
    component: Configuracion
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
