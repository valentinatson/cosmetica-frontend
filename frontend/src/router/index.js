// filepath: c:\Users\HP\Desktop\Nouveau dossier\frontend\src\router\index.js
import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../components/Acceuil.vue'
import Produit from '../components/Produit.vue'
import Apropos from '../components/Apropos.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', name: 'Acceuil', component: Acceuil },
  { path: '/produit', name: 'Produit', component: Produit },
  { path: '/apropos', name: 'Apropos', component: Apropos },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router