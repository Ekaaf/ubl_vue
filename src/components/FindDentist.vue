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
                <div class="row mt-3" >
                    <h2 style="margin: 0 auto;">Select Your Variables</h2>
                </div>
                <div class="row mt-3">
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
                </div>

                <div class="row mt-3 mb-3">
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
                    <button type="button" class="btn btn-find-now" @click="findDoctor();" style="margin: 0 auto;width: 25%;position: absolute; margin-left: -12%;margin-top: -1.2%;">Find Now</button>
                <!-- </div> -->
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

    @media only screen  and (max-width: 767px) {
        .right-side{
           float: none;
        }
    }
  
</style>
