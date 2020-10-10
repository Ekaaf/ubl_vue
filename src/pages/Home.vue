<template>
    <div style="margin-top: 3px;">
        <!--- slider-img-start-->
        <section class="slider">
            <img class="w-100" src="/assets/img/home.png" />
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>
        <!---slider-img-end-->
        <FindDentist></FindDentist>
    </div>

</template>

<script>
    import Mixin  from "../mixin.js";
    import FindDentist  from "../components/FindDentist.vue";
    export default {
        name: 'Home',
        data: function(){
            return {
            	name : '',
                password : '',
                error : '',
                currentUrl : "Home"
            }
        },
        mixins: [Mixin],
        components:{
            FindDentist
        },
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
        
        mounted(){
            
        }

    }
</script>

<style scoped>
    input[type="text"]
    {
        border: 0;
        border-bottom: 1px solid blue;
        outline: 0;
    }

    input[type="password"]
    {
        border: 0;
        border-bottom: 1px solid blue;
        outline: 0;
    }

    ::-webkit-input-placeholder {
       text-align: center;
    }

    :-moz-placeholder { /* Firefox 18- */
       text-align: center;  
    }

    ::-moz-placeholder {  /* Firefox 19+ */
       text-align: center;  
    }

    :-ms-input-placeholder {  
       text-align: center; 
    }
    input { 
        text-align: center; 
    }
    .login-div{
        display:flex;
        height:100%;
    }
</style>