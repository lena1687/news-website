import HomePage from '../components/pages/HomePage.vue';
import ArticlePage from '../components/pages/ArticlePage.vue';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/article/:id',
        name: 'ArticlePage',
        component: ArticlePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;