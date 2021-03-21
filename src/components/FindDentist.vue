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
            <div class="container select-var-font find-dentist-text text-center mt-5" style="border: 1px solid white; border-radius: 10px;" id="select-mobile">
                <form class="select-var-form" id="findDoctorForm">
                <div class="row mt-4" >
                    <h2 style="margin: 0 auto;">Select Your Variables</h2>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control rounded-pill right-side" id="location" name="location" v-model= "location" placeholder="Location" style="width: 80%;" >
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
                 <!-- mr-3 mb-5 p-3 -->
                <div class="row mt-3 mb-3">
                    <div style="border: 1px solid white; border-radius: 10px;" v-for="(doctor, index) in doctors" class="col-6 color-white mb-5 p-3" >
                        <div class="row">
                            <div class="col-md-5 mobile-doc">
                                <img  :src="'https://bdsdentist.com/ubl/' + doctor.imagelink"  @error="imageUrlAlt" class="img-fluid">
                            </div>
                            <div class="col-md-7">
                                <p >
                                    <h3><b>{{doctor.doctor_name}}</b></h3>
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
                        <router-link type="button" class="btn btn-find-now more-details" v-bind:to="'/Doctor/' + doctor.id" >More Details</router-link>
                    </div>
                    
                </div>
                
                <paginate v-if="pageCount>1"
                    v-model="page"
                    :page-count="pageCount"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="findDoctor"
                    :prev-text="'Prev'"
                    :prev-class="'page-link'"
                    :break-view-text = "'--'"
                    :next-text="'Next'"
                    :next-class="'page-link'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
                    :page-link-class="'page-link'">
                </paginate>

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
                departmentOptions:['PAEDIATRIC DENTISTRY','DEPARTMENT OF PROSTHODONTICS','ORAL ANATOMY & PHYSIOLOGY','CONSERVATIVE DENTISTRY & ENDODONTICS','ORAL AND MAXILLOFACIAL SURGERY','ORAL PATHOLOGY & PERIODONTOLOGY','ORTHODONTICS','DEPARTMENT  OF LIFE SCIENCE','PERIODENTOLOGY & ORAL PATHOLOGY','FACULTY OF DENTISTRY','DIAGNOSIS DEPARTMENT','GENERAL & DENTAL PHARMACOLOGY','DENTAL PUBLIC HEALTH','DENTAL DEPARTMENT','HEALTH','DENTAL ANATOMY','SCIENCE OF DENTAL MATERIALS'],
                doctors: [],
                location : [],
                pageCount: 0,
                page: 1
            }
        },
        methods: {

            imageUrlAlt(){
                event.target.src = "https://bdsdentist.com/ubl/public/images/default.jpg"
            },
            findDoctor(){
            	var vm = this;
                console.log(vm.currentPosition);
                var data = $('#findDoctorForm').serialize();
                vm.doctors = [];
                data = data+"&latitude="+vm.currentPosition.latitude+"&longitude="+vm.currentPosition.longitude+"&page="+vm.page;
                // data = data+"&latitude=23.797911&longitude=90.414391&page="+vm.page;
            	axios({
                        url: this.getApiUrl()+"findDoctor",
                        method: "POST",
                        // data: $('#findDoctorForm').serialize(),
                        data: data,
                }).then(function (response) {
                    vm.doctors = response.data.doctors;
                    vm.pageCount = response.data.pageCount;
                    $.each(vm.doctors, function(index, item) {
                        // do something with `item` (or `this` is also `item` if you like)
                        vm.doctors.index[0] = item.split(",");
                        console.log(item)
                    });
                }).catch(function (error) {
                    vm.error = error
                });
            },
            getAllLocation(){
                // if($("#location").val().length<3){
                //     return false;
                // }
                var vm = this;
                axios({
                        url: this.getApiUrl()+"getAllLocation",
                        method: "get",
                        params: {
                            location : $("#location").val()
                        },
                }).then(function (response) {
                    
                    var json_data = response.data;
                    var result = [];

                    for(var i in json_data)
                        result.push(json_data [i]['chamber_address']);
                    
                    $( function() {
                    $( "#location" ).autocomplete({
                      source: result
                    });
                    });
                }).catch(function (error) {
                    vm.error = error
                });
            }
        },

        mounted(){

            $( function() {
                var availableTags = [
                    "ADABOR",
                    "AJMIRIGANJ",
                    "AKHAURA",
                    "AKKELPUR",
                    "ARICHA",
                    "AZIMPUR",
                    "BADDA",
                    "BAGERHAT",
                    "BAGHERHAT",
                    "BAKERGANJ",
                    "BALIAKANDI",
                    "BANARIPARA",
                    "BANDARBAN",
                    "BANGSHAL",
                    "BARGUNA",
                    "BARISAL",
                    "BARISHAL",
                    "BARLEKHA",
                    "BAROIYARHAT",
                    "BASAIL",
                    "BAUNIA",
                    "BAUPHAL",
                    "BEANIBAZAR",
                    "BETAGI",
                    "BHALUKA",
                    "BHANDARIA",
                    "BHOLA",
                    "BHUAPUR",
                    "BIMANBANDAR",
                    "BISAWANTH",
                    "BOALKHALI",
                    "BOGRA",
                    "BOGURA",
                    "BORHANUDDIN",
                    "BRAHMANBARIA",
                    "BURICHONG",
                    "CANTONMENT",
                    "CHANDANAISH",
                    "CHANDPUR",
                    "CHAR FASSON",
                    "CHATTAGRAM",
                    "CHAWKBAZAR",
                    "CHHAGALNAIYA",
                    "CHHATAK",
                    "CHITTAGONG",
                    "CHOWMUHANI",
                    "CHUADANGA",
                    "CHUNARUGHAT",
                    "COMILLA",
                    "COX'S BAZAR",
                    "CUMILLA",
                    "DAGANBHUIYAN",
                    "DAKSHINKHAN",
                    "DARSHANA",
                    "DARUS SALAM",
                    "DARUSSALAM",
                    "DAULATKHAN",
                    "DEMRA",
                    "DERAI",
                    "DHAKA",
                    "DHAKA CANTONMENT",
                    "DHANBARI",
                    "DHANMONDI",
                    "DHUNAT",
                    "DINAJPUR",
                    "ELENGA",
                    "FARIDPUR",
                    "FATIKCHHARI",
                    "FENI",
                    "FULBARIA",
                    "GAFFARGAON",
                    "GAIBANDHA",
                    "GALACHIPA",
                    "GAZIPUR",
                    "GENDARIA",
                    "GHATAIL",
                    "GHORASHAL",
                    "GOLAPGANJ",
                    "GOPALPUR",
                    "GOURIPUR",
                    "GOURNADI",
                    "GULSHAN",
                    "GULSHAN 1",
                    "GULSHAN 2",
                    "HABIGANJ",
                    "HALUAGHAT",
                    "HATHAZARI",
                    "HATIYA",
                    "HAZARBAGH",
                    "HAZARIBAGH",
                    "HAZIGANJ",
                    "ISHWARGANJ",
                    "ISWARDI",
                    "JAGANNATHPUR",
                    "JAIPURHAT",
                    "JAMALPUR",
                    "JASHORE",
                    "JATRABARI",
                    "JESSORE",
                    "JHALAKATI",
                    "JHALOKATI",
                    "JHENAIDAH",
                    "JOYPURHAT",
                    "KACHUKHETH",
                    "KADAMTALI",
                    "KAFRUL",
                    "KAJIPARA",
                    "KALABAGAN",
                    "KALAI",
                    "KALAPARA",
                    "KALIGANJ",
                    "KALIHATI",
                    "KAMRANGIRCHAR",
                    "KANAIGHAT",
                    "KARATIA",
                    "KAZIPARA",
                    "KHAGRACHARI",
                    "KHAGRACHHARI",
                    "KHETLAL",
                    "KHILGAON",
                    "KHILKHET",
                    "KHULNA",
                    "KISHOREGANJ",
                    "KOCHUKHET",
                    "KOMOLGANJ",
                    "KOTWALI",
                    "KUAKATA",
                    "KULAURA",
                    "KURIGRAM",
                    "KUSHTIA",
                    "LAKSAM",
                    "LAKSHMIPUR",
                    "LALBAGH",
                    "LALBAGH",
                    "LALMOHAN",
                    "LALMONIRHAT",
                    "MADARIPUR",
                    "MADHABDI",
                    "MADHABPUR",
                    "MADHUPUR",
                    "MAGURA",
                    "MAIJDEE",
                    "MANIKGANJ",
                    "MATHBARIA",
                    "MATLAB",
                    "MEHENDIGANJ",
                    "MEHERPUR",
                    "MIRPUR",
                    "MIRPUR 1",
                    "MIRPUR 1",
                    "MIRPUR 10",
                    "MIRPUR 11",
                    "MIRPUR 13",
                    "MIRPUR 2",
                    "MIRPUR 6",
                    "MIRPUR MODEL",
                    "MIRPUR 14",
                    "MIRSHARAI",
                    "MIRZAPUR",
                    "MOHAMMADPUR",
                    "MONOHARDI",
                    "MOTIJHEEL",
                    "MOULVIBAZAR",
                    "MUKTAGACHHA",
                    "MULADI",
                    "MUNDUMALA",
                    "MUNSHIGANJ",
                    "MYMENSINGH",
                    "NABIGANJ",
                    "NALCHITY",
                    "NANDAIL",
                    "NAOGAON",
                    "NARAIL",
                    "NARAYANGANJ",
                    "NARSINGDI",
                    "NATORE",
                    "NAWABGANJ",
                    "NAZIR HAT",
                    "NETRAKONA",
                    "NEW MARKET",
                    "NILPHAMARI",
                    "NOAKHALI",
                    "PABNA",
                    "PALLABI",
                    "PALTAN",
                    "PANCHAGARH",
                    "PANCHBIBI",
                    "PANGSHA",
                    "PARBATTYA",
                    "PARSHURAM",
                    "PATHARGHATA",
                    "PATIYA",
                    "PATUAKHALI",
                    "PHULPUR",
                    "PIROJPUR",
                    "RAHANPUR",
                    "RAIPURA",
                    "RAJBARI",
                    "RAJSHAHI",
                    "RAMNA",
                    "RAMPURA",
                    "RANGAMATI",
                    "RANGPUR",
                    "RANGUNIA",
                    "RAOZAN",
                    "RUPNAGAR",
                    "SABUJBAGH",
                    "SAKHIPUR",
                    "SANDWIP",
                    "SANTHIA",
                    "SARAIL",
                    "SATKANIA",
                    "SATKHIRA",
                    "SAVAR",
                    "SENPARA",
                    "SHAH ALI",
                    "SHAHALI",
                    "SHAHBAGH",
                    "SHAHJADPUR",
                    "SHAISTAGANJ",
                    "SHAMBHUGANJ",
                    "SHARIATPUR",
                    "SHER-E-BANGLA NAGAR",
                    "SHERPUR",
                    "SHERPUR, BOGRA",
                    "SHEWRAPARA",
                    "SHIBPUR",
                    "SHYAMPUR",
                    "SIRAJGANJ",
                    "SITAKUNDA",
                    "SONAGAZI",
                    "SREEMANGAL",
                    "SUNAMGANJ",
                    "SUTRAPUR",
                    "SWARUPKATI",
                    "SYLHET",
                    "TALTOLA",
                    "TANGAIL",
                    "TANORE",
                    "TEJGAON",
                    "TEJGAON I/A",
                    "THAKURGAON",
                    "TRISHAL",
                    "TURAG",
                    "ULLAPARA",
                    "UTTAR KHAN",
                    "UTTARA",
                    "WAZIRPUR",
                    "ZAKIGANJ",
                ];    

                $( "#location" ).autocomplete({
                  source: availableTags
                });
            });
            var vm = this;
            vm.getCurrentpostion();
            // vm.getAllLocation();
            $('body').keypress(function (e) {
                var key = e.which;
                if(key == 13){
                    vm.findDoctor();
                }
            });
            $('#location').on('autocompleteselect', function (e, ui) {
                vm.location = ui.item.value;
            });
        }
    }
</script>


<style>

.pagination{
        float: right;
    }

    .page-link{
        color: #843d71!important;
    }

    .page-item.active .page-link {
        background-color: #561343 !important;
        border-color: #561343 !important;
        color:white !important;
    }
</style>

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
        max-width: 49.5% !important;
    }

    .col-6:nth-child(2n) {
      margin-left: 1%;
    }

    #findnow{
        margin: -20px auto 0px -24% !important;
        width: 50%!important;
    }
    .more-details{
        width: 65%;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -20px;
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
            max-width: 98% !important;
            margin-left: 1%;
            margin-right: 1%;
        }

        h3{
            font-size: 1.25rem;
        }
        #findnow{
            margin: -20px auto 0px -24% !important;
            width: 50%!important;
        }
        #select-mobile{
            width: 98%;
        }
        .more-details{
            width: 85%;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            border-radius: 10px!important;
        }
        .mobile-doc{
            text-align: center;
        }
        .mobile-doc img{
            width: 50%;
        }


    }
  
</style>
