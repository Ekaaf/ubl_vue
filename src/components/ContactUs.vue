<template>
    <div>
        <section class="contact-us">
            <div class="container">
                <div class="row pb-4 text-center color-default">
                    <div class="col-sm-12 col-md-12">
                        <h2 class="contact-after">Contact Us</h2>
                    </div>
                </div>
                <form class="contact-form" id="contactForm">
                    <div class="row">

                        <div class="form-group col-md-4 col-sm-12">
                            <input type="text" class="form-control" v-model="contact_name" id="contact_name" name="contact_name" placeholder="Name">
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                            <input type="email" class="form-control" v-model="contact_email" id="contact_email" name="contact_email" placeholder="Email">
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                            <input type="number" class="form-control" v-model="contact_number" id="contact_number" name="contact_number" placeholder="Phone Number">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <textarea class="form-control" v-model="contact_message" id="contact_message" name="contact_message" rows="3" placeholder="Messege"></textarea>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-5"></div>
                        <div class="col-md-2 text-center">
                            <button type="button" class="btn text-white rounded px-4 p-2" @click="saveContactUs();">SUBMIT</button>
                        </div>
                        <div class="col-md-5"></div>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
  import Mixin  from "../mixin.js";
  import { authHeader } from '../auth';
    export default {
        name: 'ContactUs',
        mixins: [Mixin],
        data: function() {
            return {
                contact_name: "",
                contact_email: "",
                contact_number: "",
                contact_message: ""
            }
        },
        created(){
        },
        methods: {
            saveContactUs(){
                var vm = this;
                if(vm.contact_name==""){
                    alert("Please insert name");
                    return false;
                }
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(vm.contact_email) || vm.contact_email==""){
                // if($("#email").val()==""){
                    alert("Please insert a valid email address");
                    return false;

                }
                if(vm.contact_number==""){
                    alert("Please insert number");
                    return false;
                }
                if(vm.contact_message==""){
                    alert("Please insert message");
                    return false;
                }
                axios({ 
                        url: this.getApiUrl()+"saveContactUs",
                        method: "post",
                        // params: query,
                        data: $('#contactForm').serialize() ,
                }).then(function (response) {
                    vm.contact_name = "";
                    vm.contact_email = "";
                    vm.contact_number = "";
                    vm.contact_message = "";
                    alert(response.data.message);
                    // vm.$router.push('/user/success') 
                    
                }).catch(function (error) {
                    vm.error = error
                });
            }
        }
    }
</script>

<style>
  
</style>
