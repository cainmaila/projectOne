import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import P2 from '@/components/page2'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/p2', //第二頁
        name: 'p2',
        component: P2
    }]
})
