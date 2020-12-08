<template>
    <div>
        <section class="slider">
            <img class="w-100" src="/assets/img/home.png" />
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>
        <section class="find-dentist" id='aaa'>
        <div class="container">
            <div class="row">
                <div class="col-md-5 select-var-font h2 ">
                    <div class="text-center">
                        <img class="rounded-circle" :src="'https://ubl.sensetiveexpert.com/ubl_laravel/' + doctor.imagelink" style="max-width:350px; max-height: 350px;" @error="imageUrlAlt"/>
                        <!-- <img class="rounded-circle" :src="'http://localhost/ubl_laravel/' + doctor.imagelink" style="width:350px; height: 350px;" /> -->
                    </div>

                </div>
                <div class="col-md-7 select-var-font show-dentist-text">
                    <div class="row">
                        <div class="col-md-12 ">
                            <h3 class="color-white">{{doctor.doctor_name}}</h3>
                            
                            <p class="color-white">
                                <span v-if="doctor.designation">{{doctor.department}}</span>
                                <span v-if="doctor.department"><b>DEPARTMENT:</b>  {{doctor.department}}</span> <br v-if="doctor.department">
                                <span v-if="doctor.specialization"><b>SPECIALIZATION:</b> {{doctor.specialization}}</span><br v-if="doctor.specialization"><br v-if="doctor.specialization">
                                <span v-if="doctor.chamber_name"><b>CHAMBER NAME:</b> {{doctor.chamber_name}}</span><br v-if="doctor.chamber_name">
                                <span v-if="doctor.chamber_address"><b>CHAMBER ADDRESS:</b> {{doctor.chamber_address}}</span><br v-if="doctor.chamber_address">
                                <span v-if="doctor.chamber_availability"><b>CHAMBER AVAILABILITY:</b> {{doctor.chamber_availability}}</span>
                            </p>
                            <!-- <p class="color-white">
                                {{doctor.designation}}<br><br>
                                <div class="row no-gutters color-white">
                                    <div class="col-md-3">
                                        Department
                                    </div>
                                    <div class="col-md-9">
                                        : {{doctor.department}}<br>
                                    </div>
                                    
                                </div>
                                <div class="row no-gutters color-white">
                                    <div class="col-md-3">
                                        Spcialization
                                    </div>
                                    <div class="col-md-9">
                                        : {{doctor.specialization}}<br><br>
                                    </div>
                                    
                                </div>
                                <div class="row no-gutters color-white">
                                    <div class="col-md-3">
                                        Chamber Name
                                    </div>
                                    <div class="col-md-9">
                                        : {{doctor.chamber_name}}<br>
                                    </div>
                                </div>
                                <div class="row no-gutters color-white">
                                    <div class="col-md-3">
                                        Chamber Address
                                    </div>
                                    <div class="col-md-9">
                                        : {{doctor.chamber_address}}
                                    </div>
                                </div>
                            </p> -->
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-md-5 select-var-font h2 ">
                    <div class="">
                        <div class="doctor-details">
                            <h5 class="bg-white color-default w-100 text-left py-2"> <b>Education</b></h5>
                            <!-- <div class="row doctor-text color-white pb-2">{{doctor.education}}</div> -->
                            <ul class="color-white qualification-list">
                                <li v-for="degree in degrees">{{degree}}</li>
                            </ul>
                            <h5 class="bg-white color-default w-100 text-left p-2 "> <b>BMDC Registration No</b>: {{doctor.bmdc_number}}</h5>
                            <!-- <ul class="color-white qualification-list">
                                <li></li>
                            </ul> -->
                            <h5 class="bg-white color-default w-100 text-left p-2 "> <b>Phone Number</b>: {{doctor.phone_number}}</h5>
                            <!-- <div class="row doctor-text color-white pb-2">{{doctor.phone_number}}</div> -->
                            <h5 class="bg-white color-default w-100 text-left p-2"> 
                                <a class="color-default" href="tel:doctor.phone_number" style="text-decoration: none;">
                                    <b>Call For Appoinment</b>
                                </a>
                            </h5>
                            <h5 class="bg-white color-default w-100 text-left p-2" v-if="doctor.online_consultation"> <b>Request for Online Consultation</b></h5>
                            

                            <!-- <div class="row">
                                <div class="col-md-5">
                                    <button type="button" class="btn btn-readmore rounded px-4 p-2 color-default w-100">Call Now</button>
                                </div>
                                <div class="col-md-7">
                                    <button type="button" class="btn btn-readmore rounded px-4 p-2 color-default w-100">Book Appointment</button>
                                </div>
                            </div>
                            <div class="w-100"><button type="button" class="btn btn-readmore rounded px-4 p-2 mt-3 color-default w-100">Request for Online Consulation</button></div> -->
                        </div>
                    </div>

                </div>
                <div class="col-md-7 select-var-font show-dentist-text embed-responsive embed-responsive-16by9" >
                    <!-- <img class="w-100" src="/assets/img/map1.png" /> -->
                    <!-- <iframe
                      width="600"
                      height="450"
                      frameborder="0" style="border:0"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC9eHLdLnvzYQD1XG9o2VU0wtzffq5FYRo
                        &q=Space+Needle,Seattle+WA" allowfullscreen>
                    </iframe> -->

                    <!-- <iframe class="embed-responsive-item" :src="'https://maps.google.com/maps?q='+doctor.latitude+','+doctor.longitude+'&amp&z=15&output=embed'" width="100%" height="100%" frameborder="0" style="border:0"></iframe> -->

                    <iframe class="embed-responsive-item"
                      frameborder="0" style="border:0"
                      :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyDLqNWnYkNp_0evHq3cYA2L1cfEZ19rbSI&q='+doctor.location" allowfullscreen>
                    </iframe>

                    <!-- <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="100%" height="100%" frameborder="0" style="border:0"></iframe> -->


                    <!-- <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> -->
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
                doctor: [],
                degrees: "",
                test: ""
            }
        },
        mixins: [Mixin],
        methods: {
            imageUrlAlt(){
                event.target.src = "https://ubl.sensetiveexpert.com/ubl_laravel/public/images/default.jpg"
            },
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
                    if(vm.doctor.location== null){
                        vm.doctor.location = vm.doctor.latitude+','+vm.doctor.longitude;
                        // alert(vm.doctor.location)
                    }
                    if(vm.doctor.education ==null || vm.doctor.education==""){
                        vm.degrees[0] = "BDS";
                    }
                    else{
                        vm.degrees = vm.doctor.education.split(",");
                    }
                }).catch(function (error) {
                    vm.error = error
                });
            },

        },
        mounted(){
            this.getDoctorInfo(this.$route.params.id);
            $('html, body').animate({
                scrollTop: $("#aaa").offset().top
            }, 500);
        }

    }
</script>

<style scoped>
    h5{
        font-size:18px !important;
    }

    
</style>
