<template>
    <div>
        <section class="main-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 main-menu">
                        <!---Main-Menu Code---Starts--->
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="#"><img class="w-50" src="/assets/img/logo.png"></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-item nav-link active" href="index.html">Home</a>
                                    <router-link class="nav-item nav-link"  to="/AboutUs">About Us </router-link>
                                    <router-link class="nav-item nav-link"  to="/ContactUs">Contact Us </router-link>
                                    <!-- Button trigger modal -->
                                    <a href="javascript:" class="btn-register-free nav-item nav-link" data-toggle="modal" data-target="#reg_dental_camp_modal">
                                        Registration for<br />
                                        <span>Free Dental Camp</span>
                                    </a>
                                    <li class="dropdown" v-if="loggedin">
                                        <button class="btn btn-secondary dropdown-toggle bg-default" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctor</button>
                                        <div class="dropdown-menu m-0" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item py-1 px-2" href="javascript:" data-toggle="modal" data-target="#exampleModalProfile">Edit Profile</a>
                                            <a class="dropdown-item py-1 px-2" href="javascript:" data-toggle="modal" data-target="#exampleModal-2" data-whatever="@mdo">Provide A Notice</a>
                                            <a class="dropdown-item py-1 px-2" href="index.html#">Log Out</a>
                                        </div>
                                    </li>
                                    <a class="nav-item nav-link" href="javascript:" data-toggle="modal" data-target="#loginModal">Login</a>
                                    <a class="nav-item nav-link" href="javascript:" data-toggle="modal" data-target="#signupModal">SignUp</a>
                                </div>
                            </div>
                        </nav>
                        <!---Main-Menu Code---Ends--->

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import Mixin  from "../mixin.js";
  import { authHeader } from '../auth';
    export default {
        name: 'Header',
        mixins: [Mixin],
        data: function() {
            return {
                user:[],
                image:'' 
            }
        },
        created(){
          // var accessToken = JSON.parse(this.getAccesstoken())
          // if(accessToken){
          //   this.user = accessToken.user
          //   if(this.user.type==1){
          //     this.user.type="Admin"
          //   }
          //   else if(this.user.type==2){
          //     this.user.type="BDO"
          //   }
          //   else{
          //     this.user.type="BDS"
          //   }
          //   if(this.user.image){
          //     this.image = 'http://'+document.domain+'/admin/'+this.user.image;
          //     this.image = 'http://npab.net/admin/'+this.user.image;
          //   }
          //   else{
          //     this.image = "/assets/images/user.png"
          //   }
          // }
          
          // console.log(this.image)
        },
        methods: {
          // logout(){
          //   var vm = this;
          //   axios({ 
          //           headers: authHeader(),
          //           url: this.getApiUrl()+"logout",
          //           method: "post"
          //   }).then(function (response) {
          //       localStorage.clear()
          //       vm.$router.push('/') 
          //   }).catch(function (error) {
          //       vm.$router.push('/') 
          //   });
          // }
        }
    }
</script>

<style>
  
</style>
