import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/SectionBanner'
import News from './../components/SectionNews'
import Notice from './../components/SectionNewsNotice'

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/notice',
            component: Notice
        }
    ]


})