<template>
    <div id="app">
        <!-- top header start -->
        <TopHeader></TopHeader>
        <!-- top header end -->
      	
        <!-- Menu header start -->
        <Header></Header>
        <!-- Menu header end -->
        <router-view :key="$route.fullPath"></router-view>  
        
        <ContactUs v-if="this.$router.currentRoute.name == 'ContactUs'"></ContactUs>
        
        <!---accounting--start-->
        <Accounting></Accounting>
        <!---accounting--end-->
        
        <!--footer--start-->
        <Footer></Footer>
        <!--footer--end-->
        
        <!-- all modals start -->
        <Modals></Modals>
        <!-- all modals end -->
        
        <!-- <img src="/assets/img/loading.gif" class="img-waiting"> -->
    </div>
</template>

<script>

import TopHeader  from "./components/TopHeader.vue";
import Header  from "./components/Header.vue";
import ContactUs  from "./components/ContactUs.vue";
import Accounting  from "./components/Accounting.vue";
import Modals  from "./components/Modals.vue";
import Footer  from "./components/Footer.vue";
import Mixin  from "./mixin.js";
window.axios = require('axios');
export default {
  	name: 'app',
  	mixins: [Mixin],
  	data: function(){
        return {
            counter: ""
        }
    },
	components:{
	    TopHeader, Header, ContactUs, Accounting, Modals, Footer
	},
	created(){
        
    },
    methods: {
        counterup(){
            axios({ 
                    url: this.getApiUrl()+"counterup",
                    method: "get"
            }).then(function (response) {
                
            }).catch(function (error) {
                vm.error = error
            });
        },
        getcounter(){
            axios({ 
                    url: this.getApiUrl()+"getcounter",
                    method: "get"
            }).then(function (response) {
                alert(response.data);
                vm.counter = response.data;
            }).catch(function (error) {
                vm.error = error
            });
        }
    },
    mounted(){
        $('.navbar-collapse a').click(function (e) {
            console.log('aaaa');
            $('.navbar-collapse').collapse('toggle');
        });
        var vm = this;
        if(sessionStorage.getItem('counter')){
            // alert('loaded');
        }
        else{
            sessionStorage.setItem("counter", true);
            vm.counterup();
        }
        if (window.location.href.indexOf("activate") > -1) {
            var arr=window.location.href.split('/');
            var verify = arr[5].split('?')
            if(vm.loggedin == true){
                return false;
            }
            axios({
                    url: this.getApiUrl()+"postlogin",
                    method: "post",
                    data: {
                        verify: verify[0]
                    },
                    
            }).then(function (response) {
                if(response.data.success){
                    vm.loggedin = true;
                    localStorage.setItem('accessToken',JSON.stringify(response.data));
                    window.location.href = "http://bdsdentist.com/";
                }
                else{
                    alert("Please activate your account by checking your email");
                }
                
                // vm.$router.push('/user/dashboard') 
            }).catch(function (error) {
                console.log(error)
                if(error.response.data.success == false){
                    // alert("Email and password do not match");
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if(!emailReg.test(vm.login_email) || vm.login_email==""){
                    // if($("#email").val()==""){
                        alert("BMDC No. and password do not match");
                        // return false;

                    }
                    else{
                        alert("Email and password do not match");
                    }
                }
            });
        }
    }
}
</script>

<style>
/*@import '../public/assets/css/style.css';*/
</style>
