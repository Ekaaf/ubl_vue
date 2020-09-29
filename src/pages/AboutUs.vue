<template>
    <div>
        
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
                    <div class="col-md-8 About-font">
                        <h2>About BDS Nath to Daater Dakter Nath:</h2>
                        <p>"BDS Nath Daater Dakter Nah" is a joint social awareness campaign run by bangladesh Dental Society and Senstive Expret by
                        pepsodent to raise awareness aboit authenticity in the filed of dentistry in bangladesh .the campaign
                        promotes BMDC registered dentists and help patients  learn  that only  surgeons obtaining the bachelor of Dental Surgery
                        (BDS) certification can attin a BMDC registration. The BMDC registration  is bestowed by Bangladash Medical & Dental Council,The regulatory authority and the cusodian of 
                        medical and dentl education and practice.Only BMDC certified  dantal professionals are licensed to practice on oral health.</p>
                    </div>
                    <div class="col-md-4 About-i">
                        <img src="/assets/img/about-img.png" />
                    </div>
                </div>
            </div>
        </section>

        <section class="our-goal">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 gola-font">
                        <h2>Our Goal</h2>
                        <p>Senstive Expret By pepsodent's social mission is "to eradicte orl disease so that 
                        everyone can unlock the power of their smile".</p>
                        
                        <p> In Supporting our social mission ,the "BDS Nah to Daater Dakter nah" campaign aims to establish awareness about authenticity in in filed of Dentistry and eradicte faise practice.a</p>
                        
                    </div>
                    <div class="col-md-4 About-2">
                        <img src="/assets/img/about.png" />
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

