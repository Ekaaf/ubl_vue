<template>
    <div>
        <section class="find-dentist" >
            <div class="container select-var-font find-dentist-text">
                <div class="row text-center" >
                    <h2 style="margin: 0 auto;">Find Your Dentist</h2>
                </div>
                <div class="row text-center mt-3">
                    <p class="color-yellow" style="margin: 0 auto;">
                        Find the nearest BMDC registered Dentist by filtering your location. 
                    </p>
                    <p class="color-yellow mt-3" style="margin: 0 auto;">
                        Visitors can be assured to find Dental professionals who are not only authorized by the Bangladesh Medical & Dental Council (BMDC) but also who provide a high quality of care for their patients and believe in Sensitive Expert's mission in defeating threats against Oral Health.
                    </p>
                </div>
            </div>
            <div class="container select-var-font find-dentist-text text-center mt-5" style="border: 1px solid white; border-radius: 10px;">
                <form class="select-var-form" id="findDoctorForm">
                <div class="row mt-4" >
                    <h2 style="margin: 0 auto;">Select Your Variables</h2>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control rounded-pill right-side" id="location" name="location" v-model= "location" placeholder="Location" style="width: 80%;">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control rounded-pill" id="name" name="name" v-model= "name" placeholder="Doctor Name" style="width: 80%;">
                        </div>
                    </div>
                <!-- </div> -->

                <!-- <div class="row mt-3 mb-3"> -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control rounded-pill right-side" id="chamber_name" name="chamber_name" v-model= "chamber_name" placeholder="Chamber Name" style="width: 80%;">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <select class="form-control rounded-pill" id="department" name="department" v-model= "department" style="width: 80%;">
                                <option value="" selected>Department</option>
                                <option v-for="option in departmentOptions" :value="option">{{option}}</option>
                            </select>
                        </div>
                    </div>
                </div>


                <!-- <div class="form-group"> -->
                    <button type="button" id="findnow" class="btn btn-find-now" @click="findDoctor();" style="margin: 0 auto;width: 25%;position: absolute; margin-left: -12%;margin-top: -18px;">Find Now</button>
                <!-- </div> -->
                </form>
            </div>

            <div class="container select-var-font find-dentist-text mt-5" >
                <div class="row mt-3 mb-3">
                    <div class="col-6 color-white mr-3 mb-5 p-3" style="border: 1px solid white; border-radius: 10px; max-width:90%;" v-for="doctor in doctors">
                        <div class="row">
                            <div class="col-5">
                                <img data-v-13b4122a="" :src="'http://ubl.sensetiveexpert.com/ubl_laravel/' + doctor.imagelink" class="img-fluid">
                            </div>
                            <div class="col-7">
                                <p >
                                    <h3><b>{{doctor.name}}</b></h3>
                                    <br>
                                    <span>
                                        {{doctor.department}} 
                                    </span><br>
                                    <span>
                                        BMDC No. {{doctor.bmdc_number}}
                                    </span>
                                      
                                    <hr style="color: white;">
                                    <ul>
                                        <li v-for="d in doctor.education">{{d}}</li>
                                    </ul>
                                    {{doctor.chamber_name}}
                                    <br>
                                    {{doctor.chamber_address}}
                                </p>
                            </div>
                        </div>
                        <router-link type="button" class="btn btn-find-now" v-bind:to="'/Doctor/' + doctor.user_id" @click="findDoctor();" style="width: 65%;position: absolute;     right: 96px;bottom: -20px;">More Details</router-link>
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
                department: '',
                departmentOptions:[1,2,3,4],
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
                    $.each(vm.doctors, function(index, item) {
                        // do something with `item` (or `this` is also `item` if you like)
                        vm.doctors.index[0] = item.split(",");
                        console.log(item)
                    });
                }).catch(function (error) {
                    vm.error = error
                });
            },

        },

        mounted(){
            var vm = this;
            $('body').keypress(function (e) {
                var key = e.which;
                if(key == 13){
                    vm.findDoctor();
                }
            });   
        }
    }
</script>

<style scoped>
    .rounded-pill{
        border: 1px solid white;
        color: white!important;
        background: #843d71!important;
    }

    ::-webkit-input-placeholder { /* Edge */
      color: white!important;
    }

    :-ms-input-placeholder { /* Internet Explorer */
      color: white!important;
    }

    ::placeholder {
      color: white!important;
    }

    .right-side{
         float: right;
    }

    .col-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 48% !important;
    }
    @media only screen  and (max-width: 767px) {
        .right-side{
           float: none;
        }
        .rounded-pill{
            margin: 0 auto;
        }
        .col-6 {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100% !important;
        }
        h3{
            font-size: 1.25rem;
        }
        #findnow{
            margin: -20px auto 0px -24% !important;
            width: 50%!important;
        }
    }
  
</style>
