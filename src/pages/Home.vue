<template>
    <div style="margin-top: 3px;">
        <!--- slider-img-start-->
        <section class="slider">
            <!-- <img class="w-100" src="/assets/img/home.png" /> -->
            <!-- <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7v3Tz0zL4Qg?autoplay=1&mute=1&playlist=7v3Tz0zL4Qg&loop=1" allowfullscreen></iframe>
            </div> -->
            <video autoplay muted id="video">
              <source src="/assets/video.webm" type="video/webm">
              Your browser does not support HTML5 video.
            </video>
            <div class="container">
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
            // $("#video").play();
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
    video {
  max-width: 100%;
  height: auto;
}
</style>