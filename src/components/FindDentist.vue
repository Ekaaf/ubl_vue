<template>
    <div>
        <section class="find-dentist">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 select-var-font h2">
                        <h2><u>Select Your Variables</u></h2>
                        <div class="col-sm-12" style="padding: 0">
                            <form class="select-var-form" id="findDoctorForm">
                                <div class="form-group">
                                    <select class="form-control color-default rounded-pill" id="location" name="location" v-model= "location">
                                        <option value="">Location</option>

                                    </select>
                                </div>

                                <div class="form-group">
                                    <select class="form-control color-default rounded-pill" id="name" name="name" v-model= "name">
                                        <option value="">Doctor Name</option>

                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control color-default rounded-pill" id="chamber_name" name="chamber_name" v-model= "chamber_name" placeholder="Chamber Name">
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control color-default rounded-pill" id="specialization" name="specialization" v-model= "specialization" placeholder="Department">
                                </div>
                                <div class="form-group">
                                    <input type="number" class="form-control color-default rounded-pill" id="phone_number" name="phone_number" v-model= "phone_number" placeholder="Phone Number">
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-find-now" @click="findDoctor();">Find Now</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="col-md-8 select-var-font find-dentist-text" v-if="doctors.length==0">
                        <h2><u>Find Your Dentist</u></h2>
                        <p class="color-yellow">
                            Find the nearest BMDC registered Dentist by filtering your location. 
                        </p>
                        <p class="color-yellow">
                            Visitors can be assured to find Dental professionals who are not only authorized by the Bangladesh Medical & Dental Council (BMDC) but also who provide a high quality of care for their patients and believe in Sensitive Expert's mission in defeating threats against Oral Health.
                        </p>
                        <div>
                            <!-- <button type="button" class="btn btn-readmore rounded px-4 p-2">Read More</button> -->
                        </div>
                    </div>

                    <div class="col-md-8 select-var-font find-dentist-text">
                        <div class="row"  v-for="doctor in doctors">
                            <div class="col-4 text-center">
                                <img class="img-fluid"  :src="'http://localhost/ubl_laravel/' + doctor.imagelink">
                                <router-link class="btn btn-readmore rounded px-4 p-2 mt-3" v-bind:to="'/Doctor/' + doctor.id">Read More</router-link>
                            </div>
                            <div class="col-8" style="color: white;">
                                <p>
                                    <h3><b>{{doctor.name}}</b></h3>
                                    <br>
                                    <span>
                                        {{doctor.specialization}} 
                                    </span>
                                    <span class="float-right">
                                        BMDC No. {{doctor.bmdc_number}}
                                    </span>
                                      
                                    <hr style="color: white;">
                                    <ul>
                                        <li>BDS</li>
                                        <li>FCPS</li>
                                    </ul>
                                    {{doctor.chamber_name}}
                                    <br>
                                    {{doctor.chamber_address}}
                                </p>
                                    
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
        name: 'FindDentist',
        mixins: [Mixin],
        data: function(){
            return {
                location : '',
                name: '',
                chamber_name: '',
                specialization: '',
                phone_number : '',
                doctors: []
            }
        },
        methods: {

            findDoctor(){
            	var vm = this;
            	axios({
                        url: this.getApiUrl()+"findDoctor",
                        method: "POST",
                        data: $('#findDoctorForm').serialize(),
                        // data: form_data,
                }).then(function (response) {
                    vm.doctors = response.data;
                }).catch(function (error) {
                    vm.error = error
                });
            },
        }
    }
</script>

<style>
  
</style>
