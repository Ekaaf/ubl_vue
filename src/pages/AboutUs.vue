<template>
    <div style="margin-top: 3px;">
        
        <section class="slider">
            <img class="w-100" src="/assets/img/aboutus.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    
                    </div>
                </div>
            </div>
        </section>

        <section class="About">
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 About-font">
                        <h2 style="font-size:30px;"><b>About BDS Nah to Daater Daktar Nah:</b></h2>
                        <p style="font-size:15px;">"BDS Nah to Daater Daktar Nah" is a joint social awareness campaign run by Bangladesh Dental Society and Sensitive Expert by Pepsodent to raise awareness about authenticity in the field of dentistry in Bangladesh. The campaign promotes BMDC registered dentists and help patients learn that only surgeons obtaining the Bachelor of Dental Surgery (BDS) certification can attain a BMDC registration. The BMDC registration is bestowed by Bangladesh Medical & Dental Council, the regulatory authority and the custodian of medical and dental education and practice. Only BMDC certified dental professionals are licensed to practice oral health.
                        </p>

                        
                    </div>
                    <div class="col-sm-3 About-i text-center">
                        <img src="/assets/img/about-img.png" class="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

        <section class="our-goal">
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 gola-font ">
                        <h2 style="font-size:30px;">Our Goal</h2>
                        <p style="font-size:15px;">Sensitive Expert by Pepsodent's social mission is "to eradicate oral disease so that everyone can unlock the power of their smile".</p>
                        
                        <p style="font-size:15px;"> In supporting our social mission, the "BDS Nah to Daater Daktar Nah" campaign aims to establish awareness about authenticity in the field of dentistry and eradicate false practices.</p>
                        

                        <p style="font-size:15px;">
                            To learn more about Sensitive Expert by Pepsodent:<br>
                            <a href="https://www.pepsodent.com/bd/professional/professional-science.html" style="color: background: #001A70 !important;word-wrap:break-word;">https://www.pepsodent.com/bd/professional/professional-science.html</a>
                            <br><br>
                            To learn more about Bangladesh Dental Society: <br>
                            <a href="https://bangladeshdentalsociety.com/" style="color: background: #001A70 !important;word-wrap:break-word;">https://bangladeshdentalsociety.com/</a>
                        </p>
                    </div>
                    <div class="col-sm-3 About-i text-center">
                        <img src="/assets/img/about.png" class="img-fluid"/>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    export default {
        name: 'AboutUs',
        data: function(){
            return {
            }
        },
        mixins: [Mixin],
        methods: {

            login(){

                var vm = this;
                vm.error = '';
                var request_data = {
                    "name": vm.name,
                    "password": vm.password,
                };

                axios({
                        url: this.getApiUrl()+"login",
                        method: "post",
                        data: request_data,
                }).then(function (response) {
                    console.log(response.data)
                    localStorage.setItem('accessToken',JSON.stringify(response.data))
                    vm.$router.push('/user/dashboard') 
                }).catch(function (error) {
                    vm.error = error
                });
            },

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
    @media only screen and (max-width: 640px) {
        .img-fluid{
            width: 70%;
        }
    }
</style>