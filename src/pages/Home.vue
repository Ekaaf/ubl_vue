<template>
    <div>
        <!--- slider-img-start-->
        <section class="slider">
            <img class="w-100" src="/assets/img/slide-1.png" />
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>
        <!---slider-img-end-->
        <section class="find-dentist">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 select-var-font h2">
                        <h2><u>Select Your Variables</u></h2>
                        <div class="col-sm-12 ">
                            <form class="select-var-form ">
                                <div class="form-group py-2">
                                    <select class="form-control color-default rounded-pill" id="exampleFormControlSelect1">
                                        <option>Location</option>

                                    </select>
                                </div>

                                <div class="form-group py-2">
                                    <select class="form-control color-default rounded-pill" id="exampleFormControlSelect1">
                                        <option>Doctor Name</option>

                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control color-default rounded-pill" id="exampleFormControlInput1" placeholder="Chamber Name">
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control color-default rounded-pill" id="exampleFormControlInput1" placeholder="Department">
                                </div>
                                <div class="form-group py-2">
                                    <input type="number" class="form-control color-default rounded-pill" id="exampleFormControlInput1" placeholder="Phone Number">
                                </div>
                                <div class="form-group py-2">
                                    <button type="button" class="btn btn-find-now">Find Now</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="col-md-7 select-var-font find-dentist-text">
                        <h2><u>Find Your Dentist</u></h2>
                        <p class="color-yellow">
                            One of the world's leading hospitals providing safe &<br /> compassionate care at its best for everyone
                        </p>
                        <p class="color-yellow">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi molestiae autem fugit consectetur dolor ullam illo ipsa numquam, quod iusto enim ipsum amet iusto amet consec.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi molestiae autem fugit consectetur dolor ullam illo ipsa numquam, quod iusto enim ipsum amet iusto amet consec.
                        </p>
                        <div>
                            <button type="button" class="btn btn-readmore rounded px-4 p-2">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    import Mixin  from "../mixin.js";
    export default {
        name: 'Home',
        data: function(){
            return {
            	name : '',
                password : '',
                error : ''
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