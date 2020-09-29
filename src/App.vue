<template>
    <div id="app">
        <!-- top header start -->
        <TopHeader></TopHeader>
        <!-- top header end -->
      	
        <!-- Menu header start -->
        <Header></Header>
        <!-- Menu header end -->
        <router-view></router-view>  
        <!--Contact Us--Start--->
        <ContactUs v-if="this.$router.currentRoute.name!= 'AboutUs' && this.$router.currentRoute.name!= 'ContactUs'"></ContactUs>
        <!--Contact US--End--->
        
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
        }
    },
	components:{
	    TopHeader, Header, ContactUs, Accounting, Modals, Footer
	},
	created(){
  }
}
</script>

<style>
/*@import '../public/assets/css/style.css';*/
</style>
