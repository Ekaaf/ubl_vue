<template>
    <div>
        <section class="main-header" >
            <div class="container">
                <div class="row">
                    <div class="col-md-12 main-menu" style="z-index:11">
                        <!---Main-Menu Code---Starts--->
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <!-- <a class="navbar-brand" href="#"><img class="w-75" src="/assets/img/logo.png"></a> -->
                            <router-link class="navbar-brand" v-bind:class = "(currentUrl=='Home')?'active':''"  to="/Home"><img class="w-75" src="/assets/img/logo.png"></router-link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav" v-bind:style="{ marginRight: marginRight + 'px' }">
                                    <router-link class="nav-item nav-link" v-bind:class = "(currentUrl=='Home')?'active':''"  to="/Home">Home</router-link>
                                    <router-link class="nav-item nav-link" v-bind:class = "(currentUrl=='AboutUs')?'active':''"  to="/AboutUs">About Us </router-link>
                                    <router-link class="nav-item nav-link" v-bind:class = "(currentUrl=='ContactUs')?'active':''"  to="/ContactUs">Contact Us </router-link>
                                    <!-- <a href="javascript:" class="btn-register-free nav-item nav-link" data-toggle="modal" data-target="#reg_dental_camp_modal">
                                        Registration for<br />
                                        <span>Free Dental Camp</span>
                                    </a> -->
                                    <a href="javascript:" class="nav-item nav-link" data-toggle="modal" data-target="#reg_dental_camp_modal" >Registration for Free Dental Camp</a>

                                    <a href="javascript:" class="nav-item nav-link" data-toggle="modal" data-target="#apply_dental_camp_modal" v-if="role_id==3">Apply for Free Sample</a>

                                    <a class="nav-item nav-link" href="javascript:" data-toggle="modal" data-target="#loginModal" v-if="!loggedin">Login</a>
                                    <a class="nav-item nav-link" href="javascript:" data-toggle="modal" data-target="#signupModal" v-if="!loggedin">SignUp</a>
                                    <!-- Button trigger modal -->
                                    

                                    <li class="dropdown doctorbutton" v-if="role_id==2">
                                        <button class="btn btn-secondary dropdown-toggle bg-default" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctor</button>
                                        <div class="dropdown-menu m-0" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item py-1 px-2" href="javascript:" data-toggle="modal" data-target="#doctor_edit">Edit Profile</a>
                                            <a class="dropdown-item py-1 px-2" href="javascript:" data-toggle="modal" data-target="#change_pass">Change Password</a>
                                            <a class="dropdown-item py-1 px-2" href="javascript:" data-toggle="modal" data-target="#exampleModal-2" data-whatever="@mdo">Provide A Notice</a>
                                            <a class="dropdown-item py-1 px-2" @click="logout();">Log Out</a>
                                        </div>
                                    </li>


                                    <li class="dropdown doctorbutton" v-if="role_id==3">
                                        <button class="btn btn-secondary dropdown-toggle bg-default" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</button>
                                        <div class="dropdown-menu m-0" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item py-1 px-2" href="javascript:" data-toggle="modal" data-target="#user_edit">Edit Profile</a>
                                            <a class="dropdown-item py-1 px-2" href="javascript:" data-toggle="modal" data-target="#change_pass">Change Password</a>
                                            <a class="dropdown-item py-1 px-2" href="javascript:" data-toggle="modal" data-target="#exampleModal-2" data-whatever="@mdo">Provide A Notice</a>
                                            <a class="dropdown-item py-1 px-2" @click="logout();">Log Out</a>
                                        </div>
                                    </li>
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
                image:'',
                loggedin: "",
                role_id: "",
                currentUrl : "Home",
                marginRight : 0,
            }
        },
        created(){
          var accessToken = JSON.parse(this.getAccesstoken())
          this.currentUrl = this.$router.currentRoute.name;
          if(accessToken){
            this.user = accessToken.user;
            this.role_id = this.user.role_id;
            this.loggedin = true;
            this.marginRight = 75;
          }
          
          // console.log(this.image)
        },
        methods: {
          logout(){
            var vm = this;
            localStorage.clear()
            window.location.reload();
            // axios({ 
            //         headers: authHeader(),
            //         url: this.getApiUrl()+"logout",
            //         method: "post"
            // }).then(function (response) {
            //     localStorage.clear()
            //     vm.$router.push('/') 
            // }).catch(function (error) {
            //     vm.$router.push('/') 
            // });
          }
        },
        watch:{
            $route (to, from){
                var vm = this;
                vm.currentUrl = this.$router.currentRoute.name;
            }
        } 
    }
</script>

<style>
  
</style>
