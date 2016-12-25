import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const routes = [
    {
        path: '/',
        component: App
    }
    ]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: 'http://localhost:9292'
})

const app = new Vue({
    el: "#app",
    router:router,
    render: h => h(App)
})


