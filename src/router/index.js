import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '~/layout/MainLayout.vue'
import SingleLayout from '~/layout/SingleLayout.vue'
import MainView from '~/views/Main.vue'
    
import exam from './exam'

const routes = [...exam]

routes.push({
    path: '/:pathMatch(.*)*',
    component: SingleLayout,
    children: [{
        path: '',
        component: MainView
    }]
})
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router