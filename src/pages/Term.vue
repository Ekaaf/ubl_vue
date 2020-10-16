<template>
    <div style="margin-top: 3px;">


        

        <section class="our-goal">
            <div class="container">
                Terms page
            </div>
        </section>
    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    export default {
        name: 'Term',
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