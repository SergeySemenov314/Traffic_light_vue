import Vue from 'vue'
import Router from 'vue-router'
import TrafficLight from '@/components/TrafficLight'

Vue.use(Router)

export default new Router ({
    mode:'history',
    routes: [
        {
            path:'/',
            component: TrafficLight,
            props: { default: true, colorRed: true, colorYellow: false, colorGreen: false }
        },
        {
            path: '/red',
            component: TrafficLight,
            props: { default: true, colorRed: true, colorYellow: false, colorGreen: false }
        },
        {
            path: '/yellow',
            component: TrafficLight,
            props: { default: true, colorRed: false, colorYellow: true, colorGreen: false }
        },
        {
            path: '/green',
            component: TrafficLight,
            props: { default: true, colorRed: false, colorYellow: false, colorGreen: true }
        }
    ]
})