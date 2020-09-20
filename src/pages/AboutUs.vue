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

