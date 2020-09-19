import Vue from 'vue'
import Router from 'vue-router'


/*
* @ all pages
*
*/
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import ContactUs from '@/pages/ContactUs'
import Dashboard from '@/pages/Dashboard'
import AddStore from '@/pages/AddStore'
import Audit from '@/pages/Audit'
import Research from '@/pages/Research'
import DailyVisit from '@/pages/DailyVisit'
import Success from '@/pages/Success'
import guard from '../guard';


Vue.use(Router)
const router =  new Router({
	routes: [
        {
            path: '/',
			name: 'Home',
			component: Home,
			// meta: { title: "Uniliver" }
        },

        {
            path: '/Home',
            name: 'Home',
            component: Home
        },

        {
            path: '/AboutUs',
            name: 'AboutUs',
            component: AboutUs
        },

        {
            path: '/ContactUs',
            name: 'ContactUs',
            component: ContactUs
        },

        {
            path: '/user/dashboard',
			name: 'dashboard',
			component: Dashboard,
            beforeEnter: guard
        },

        {
            path: '/user/add-store',
			name: 'AddStore',
			component: AddStore,
            beforeEnter: guard
        },

        {
            path: '/user/audit',
            name: 'Audit',
            component: Audit,
            beforeEnter: guard
        },

        {
            path: '/user/research',
            name: 'Research',
            component: Research,
            beforeEnter: guard
        },

        {
            path: '/user/daily-visit',
            name: 'DailyVisit',
            component: DailyVisit,
            beforeEnter: guard
        },

        {
            path: '/user/success',
            name: 'Success',
            component: Success,
            beforeEnter: guard
        }
       
	],
    mode:"history"
});

// ** set meta in router. then title is added from here
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })




window.axios.interceptors.request.use(function (config) {
    $(".img-waiting").show();
    $("body").css("opacity","0.4")

    return config;
}, function (error) {
    $(".img-waiting").show();
    $("body").css("opacity","0.4")
    return Promise.reject(error);
});

window.axios.interceptors.response.use(function (response) {
    $(".img-waiting").hide();
    $("body").css("opacity","1")
    return response;
}, function (error) {
    $(".img-waiting").hide();
    $("body").css("opacity","1")
    return Promise.reject(error);
});


export default router;