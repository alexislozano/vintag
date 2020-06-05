import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'
import Profile from '../pages/Profile.vue'
import Signin from '../pages/Signin.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/search',
    name: 'Search',
    component: Search
}, {
    path: '/profile',
    name: 'Profile',
    component: Profile
}, {
    path: '/signin',
    name: 'Signin',
    component: Signin
}, {
    path: '*',
    name: 'NotFound',
    component: NotFound
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Signin' && !store.state.user) {
        next({ name: 'Signin' })
    } else {
        next()
    }
})

export default router
