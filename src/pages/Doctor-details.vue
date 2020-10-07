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
        <section class="find-dentist">
        <div class="container">
            <div class="row">
                <div class="col-md-5 select-var-font h2 ">
                    <div class="text-center">
                        <img class="rounded-circle" :src="'http://ubl.sensetiveexpert.com/ubl_laravel/' + doctor.imagelink" style="max-width:350px; max-height: 350px;" />
                        <!-- <img class="rounded-circle" :src="'http://localhost/ubl_laravel/' + doctor.imagelink" style="width:350px; height: 350px;" /> -->
                    </div>

                </div>
                <div class="col-md-7 select-var-font show-dentist-text">
                    <div class="row">
                        <div class="col-md-12 ">
                            <h3 class="color-white">{{doctor.doctor_name}}</h3>
                            
                            <p class="color-white">
                                {{doctor.designation}}<br v-if="doctor.designation"><br v-if="doctor.designation">
                                <span v-if="doctor.department">Department: {{doctor.department}}</span> <br v-if="doctor.department">
                                <span v-if="doctor.specialization">Specialization: {{doctor.specialization}}</span><br v-if="doctor.specialization"><br v-if="doctor.specialization">
                                <span v-if="doctor.chamber_name">Chamber Name: {{doctor.chamber_name}}</span><br v-if="doctor.chamber_name">
                                <span v-if="doctor.chamber_address">Chamber Address: {{doctor.chamber_address}}</span>
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
                <div class="col-md-7 select-var-font show-dentist-text">
                    <img class="w-100" src="/assets/img/map1.png" />
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
                    // vm.degrees = vm.doctor.education.split(",");
                    // console.log(vm.degrees);
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
            this.getDoctorInfo(this.$route.params.id)
        }

    }
</script>

<style scoped>
    h5{
        font-size:18px !important;
    }
</style>
