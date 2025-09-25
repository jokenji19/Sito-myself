import { createRouter, createWebHistory } from 'vue-router';
import { HomePage } from '../views';
import Progetti from '../components/Progetti.vue';
import Competenze from '../components/Competenze.vue';
import Contatti from '../components/Contatti.vue';
import ChiSono from '../components/ChiSono.vue';

const routes = [
{
    path: '', // L'URL per questa rotta (la radice del sito)
    name: 'home', // Un nome univoco per la rotta
    component: HomePage // Il componente da caricare
},
{
    path: '/portfolio',
    redirect: '/home' // Reindirizza alla home
},
{
    path: '/progetti',
    name: 'progetti',
    component: Progetti
},
{
    path: '/Competenze',
    name: 'Competenze',
    component: Competenze
},
{
    path: '/Contatti',
    name: 'Contatti',
    component: Contatti
},

{    
    path: '/ChiSono',
    name: 'ChiSono',
    component: ChiSono

}

];

const router = createRouter({
history: createWebHistory(),
routes,
});


export default router;