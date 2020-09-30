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
                    <img class="w-75" :src="'http://ubl.sensetiveexpert.com/ubl_laravel/' + doctor.imagelink" />
                    <!-- <img class="w-75" :src="'http://localhost/ubl_laravel/' + doctor.imagelink" /> -->
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
                                <li>{{doctor.bmdc_number}}</li>
                            </ul>
                            <h5 class="bg-white color-default w-100 text-left p-2 "> Details</h5>
                            <ul class="color-white qualification-list">
                                <li>Phone Number - {{doctor.phone_number}}</li>
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
                            <h2>{{doctor.name}}</h2>
                            
                            <!-- <p class="color-white">
                                One of the world's leading hospitals providing safe &<br /> compassionate care at its best for everyone
                            </p> -->
                            <p class="color-white">
                                BMDC No. {{doctor.bmdc_number}}  Cell no. {{doctor.phone_number}}
                                <br>
                                {{doctor.chamber_name}}<br>
                                {{doctor.chamber_address}}
                            </p>
                            <br />
                            <img class="w-100" src="/assets/img/map1.png" />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8018.001432252806!2d90.43567823742545!3d23.824946481134578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c639bf1bdc15%3A0x79e5b3afe4d99d9c!2zMjPCsDQ5JzI1LjciTiA5MMKwMjYnMDUuMCJF!5e0!3m2!1sen!2sbd!4v1601468777618!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
                doctor: []
            }
        },
        mixins: [Mixin],
        methods: {
            getDoctorInfo(id){
                var vm = this;
                axios({
                        url: this.getApiUrl()+"getDoctorInfo",
                        method: "GET",
                        params: {
                            id : id
                        },
                        // data: form_data,
                }).then(function (response) {
                    vm.doctor = response.data[0];
                    console.log(vm.doctor);
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },

        },
        mounted(){
            this.getDoctorInfo(this.$route.params.id)
        }

    }
</script>

