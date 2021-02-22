import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/SectionBanner'
import News from './../components/SectionNews'
import Notice from './../components/SectionNewsNotice'
import Ranking from './../components/Ranking'

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
            path: '/',
            component: Home

        },
        {
            path: '/news',
            component: News,
            name: 'news'
        },
        {
            path: '/news/:idnotice',
            name: 'notice',
            component: Notice
        },
        {
            path: '/ranking',
            component: Ranking
        }
    ]


})