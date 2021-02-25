import Vue from 'vue'
import Router from 'vue-router'


/*
* @ all pages
*
*/
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import ContactUs from '@/pages/ContactUs'
import Signup from '@/pages/Signup'
import DoctorDetails from '@/pages/Doctor-details'

import Dashboard from '@/pages/Dashboard'
import AddStore from '@/pages/AddStore'
import Audit from '@/pages/Audit'
import Research from '@/pages/Research'
import DailyVisit from '@/pages/DailyVisit'
import Success from '@/pages/Success'
import Term from '@/pages/Term'
import Privacy from '@/pages/Privacy'
import Cookies from '@/pages/Cookies'
import Freedentalcheckup from '@/pages/Freedentalcheckup'
import Freecheckup from '@/pages/Freecheckup'
import RegPepsodent from '@/pages/RegPepsodent'

import guard from '../guard';


Vue.use(Router)
const router =  new Router({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    mode: 'history',
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
            path: '/terms',
            name: 'Term',
            component: Term
        },

        {
            path: '/privacy',
            name: 'Privacy',
            component: Privacy
        },

        {
            path: '/sensetive',
            name: 'Freedentalcheckup',
            component: Freedentalcheckup
        },

        {
            path: '/freecheckup',
            name: 'Freecheckup',
            component: Freecheckup
        },

        {
            path: '/pepsodent',
            name: 'RegPepsodent',
            component: RegPepsodent
        },

        {
            path: '/cookies',
            name: 'Cookies',
            component: Cookies
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
            path: '/Signup',
            name: 'Signup',
            component: Signup
        },

        {
            path: '/Doctor/:id',
            name: 'DoctorDetails',
            component: DoctorDetails
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