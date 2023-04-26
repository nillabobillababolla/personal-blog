import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/contact',
            component: () => import('@/views/Contact.vue'),
        },
        {
            // path: "*",
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: Home,
            meta: {
                requiresAuth: false
            }
        }
    ],
})
