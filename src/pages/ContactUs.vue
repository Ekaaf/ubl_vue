<template>
    <div style="margin-top: 3px;">

        <section class="slider">
            <img class="w-100" src="/assets/img/contactus.png">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="contact-us" style="background: #843d71;">
            <div class="container">
                <div class="row pb-4 text-center color-default">
                    <div class="col-sm-12 col-md-12" style="color:white;">
                        <h2 class="contact-after">Contact Us</h2>
                    </div>
                </div>
                <form class="contact-form" id="contactForm">
                    <div class="row">

                        <div class="form-group col-md-4 col-sm-12">
                            <input type="text" class="form-control contact-input" v-model="contact_name" id="contact_name" name="contact_name" placeholder="Name">
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                            <input type="email" class="form-control contact-input" v-model="contact_email" id="contact_email" name="contact_email" placeholder="Email">
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                            <input type="number" class="form-control contact-input" v-model="contact_number" id="contact_number" name="contact_number" placeholder="Phone Number">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <textarea class="form-control contact-input" v-model="contact_message" id="contact_message" name="contact_message" rows="3" placeholder="Messege"></textarea>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-5"></div>
                        <div class="col-md-2 text-center">
                            <button type="button" class="btn btn-readmore rounded px-4 p-2" @click="saveContactUs();">SUBMIT</button>
                        </div>
                        <div class="col-md-5"></div>
                    </div>
                </form>
            </div>
        </section> -->
    </div>

</template>

<script>
    import Mixin  from "../mixin.js";
    export default {
        name: 'ContactUs',
        data: function() {
            return {
                contact_name: "",
                contact_email: "",
                contact_number: "",
                contact_message: ""
            }
        },
        mixins: [Mixin],
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

        },
        mounted(){var vm = this;
            $(document).on('keypress',function(e) {

                if(e.which == 13) {
                    vm.login();
                }
            });
        }

    }
</script>
<style scoped>
    ::-webkit-input-placeholder { /* Edge */
      color: white!important;
    }

    :-ms-input-placeholder { /* Internet Explorer */
      color: white!important;
    }

    ::placeholder {
      color: white!important;
    }

    .contact-input{
        background: #843d71;color:white;border: 1px solid #ced4da;
    }
</style>
