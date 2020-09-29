<template>
    <div>
        <section class="slider">
            <img class="w-100" src="/assets/img/slide-1.png" />
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>
        <section class="find-dentist">
        <div class="container">
            <div class="row">
                <div class="col-md-5 select-var-font h2">
                    <img class="w-75" src="/assets/img/marwan-alobeidi.png" />
                    <div class="w-75 text-center"><button type="button" class="btn btn-readmore rounded px-4 p-2 mt-3 color-default">Book Appointment</button></div>

                    <div class="">
                        <div class="doctor-details">
                            <h5 class="bg-white color-default w-100 text-left p-2 "> Degrees</h5>
                            <ul class="color-white qualification-list">
                                <li>BDS</li>
                                <li>FCPS</li>
                            </ul>
                            <h5 class="bg-white color-default w-100 text-left p-2 "> BMDC Registration No:</h5>
                            <ul class="color-white qualification-list">
                                <li>8977</li>
                            </ul>
                            <h5 class="bg-white color-default w-100 text-left p-2 "> Details</h5>
                            <ul class="color-white qualification-list">
                                <li>Phone Number - 0198989898</li>
                            </ul>
                            <div class="row">
                                <div class="col-md-5">
                                    <button type="button" class="btn btn-readmore rounded px-4 p-2 color-default w-100">Call Now</button>
                                </div>
                                <div class="col-md-7">
                                    <button type="button" class="btn btn-readmore rounded px-4 p-2 color-default w-100">Book Appointment</button>
                                </div>
                            </div>
                            <div class="w-100"><button type="button" class="btn btn-readmore rounded px-4 p-2 mt-3 color-default w-100">Request for Online Consulation</button></div>
                        </div>
                    </div>

                </div>
                <div class="col-md-7 select-var-font show-dentist-text">
                    <div class="row">
                        <div class="col-md-12 ">
                            <h2>Dr. Ali Malik Othman</h2>
                            <h6><u> Orthodontics, Andodontics &nbsp;&nbsp;&nbsp; BMDC No. 8977 </u></h6>

                            <p class="color-white">
                                One of the world's leading hospitals providing safe &<br /> compassionate care at its best for everyone
                            </p>
                            <p class="color-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi molestiae autem fugit consectetur dolor ullam illo ipsa numquam, quod iusto enim ipsum amet iusto amet consec.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi molestiae autem fugit consectetur dolor ullam illo ipsa numquam, quod iusto enim ipsum amet iusto amet consec.
                            </p>
                            <br />
                            <img class="w-100" src="/assets/img/map1.png" />
                        </div>
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
        name: 'DoctorDetails',
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

