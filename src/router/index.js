import { createRouter, createWebHistory } from 'vue-router';
import { HomePage } from '../views';

const routes = [
{
    path: '/', // L'URL per questa rotta (la radice del sito)
    name: 'home', // Un nome univoco per la rotta
    component: HomePage // Il componente da caricare
}
];

const router = createRouter({
history: createWebHistory(),
routes,
});


export default router;