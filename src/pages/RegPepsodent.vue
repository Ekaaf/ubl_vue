<template>
    <div style="margin-top: 3px;">

        <section class="contact-us">
            <div class="container">
                <div class="container-fluid px-md-5">
                    <div class="row justify-content-center py-4" >
                        <div class="col-12 justify-content-center py-1" style="background: white;border-radius: 191px;">
                            <h3 class="justify-content-center" style="font-weight: bold;color: #E7012E;text-align: center;;line-height: 164.06%;letter-spacing: 0.05em;border:1px solid #E7012E;;border-radius: 191px;">
                                <span class="nav-item nav-link" style="color: #E7012E;font-family: 'Siyam Rupali';" id="header1">নিম্নে আপনার তথ্যসমূহ প্রদান করুন</span>
                            </h3>
                        </div>
                        
                    </div>
                </div>
                <form class="pepsodent" id="pepsodent">
                    <div class="row">

                        <div class="form-group col-md-12 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="name" id="name" name="name" placeholder="নাম/Name">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="email" id="email" name="email" rows="3" placeholder="ইমেইল/Email">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="phone" id="phone" name="phone" rows="3" placeholder="ফোন নাম্বার/Phone No.">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="address" id="address" name="address" placeholder="ঠিকানা/Address">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="email" class="form-control border-round" v-model="upazila" id="upazila" name="upazila" placeholder="উপজেলা/Upazila">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="district" id="district" name="district" placeholder="জেলা/District">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="email" class="form-control border-round" v-model="division" id="division" name="division" placeholder="বিভাগ/Division">
                        </div>
                    </div>
                    <div class="row justify-content-center my-2">
                        <div class="col-6 justify-content-center py-3" style="background: white;border-radius: 191px;">
                            <h3 class="justify-content-center py-2" id="header2" style="font-weight: bold;color: #E7012E;text-align: center;;line-height: 164.06%;letter-spacing: 0.05em;border:1px solid #E7012E;border-radius: 191px;">
                                শর্তাবলী
                            </h3>
                        </div>
                    </div>
                    <div class="contact-form p-5" style="border:1px solid #E7012E; color: #E7012E;border-radius: 50px;"> 
                        <span>
                            ১. ফ্রি ডেন্টাল চেকআপ পেতে পেপসোডেন্ট টুথপেস্ট এর "ফ্রি ডেন্টাল চেকআপ" লিখিত ২০০গ্রাম এর একটি খালি মোড়ক ডাক্তারের চেম্বারে জমা দিতে হবে। 
                        </span>
                        <br><br>
                        <span>
                            ২. এই ফ্রি ডেন্টাল চেকআপ এর অফার আগামী ৩০শে এপ্রিল, ২০২১ পর্যন্ত অব্যাহত থাকবে।
                        </span>
                        <br><br>
                        <span>
                            ৩. এই অফারে শুধুমাত্র একবার বিনামূল্যে চেকআপ এবং পরামর্শ অন্তর্ভুক্ত থাকবে। চেকআপ পরবর্তী কোন ডায়াগনোসিস, চিকিৎসা, ওষুধ ইত্যাদি এই অফারের আওতাধীন হিসেবে বিবেচিত হবে না। 
                        </span>
                        <br><br>
                        <span>
                            ৪. ইউনিলিভার বাংলাদেশ লিমিটেড যেকোনো সময়ে এই অফারের শর্তাবলী এবং সময়কাল পরিবর্তন, সংশোধন বা বাতিল করতে পারবে।

                        </span>
                        <br><br>
                        <span>
                            ৫. এই প্রোগ্রাম এর সাথে সম্পৃক্ত সকল ছবি এবং ভিডিও, পেপসোডেন্ট বা ইউনিলিভার বাংলাদেশ লিমিটেডের বিপণন এবং সোশ্যাল মিডিয়া প্ল্যাটফর্মের জন্য ব্যবহারের অধিকার থাকবে।
                        </span>
                    </div>

                    <div class="row justify-content-center my-2">
                        <div class="col-6 justify-content-center py-3" style="background: white;border-radius: 191px;">
                            <h3 class="justify-content-center py-2" id="header2" style="font-weight: bold;color: #E7012E;text-align: center;;line-height: 164.06%;letter-spacing: 0.05em;border:1px solid #E7012E;border-radius: 191px;">
                                Terms & Conditions
                            </h3>
                        </div>
                    </div>
                    <div class="contact-form p-5" style="border:1px solid #E7012E; color: #E7012E;border-radius: 50px;"> 
                        <span>
                            1. A free dental checkup can be availed from a dentist's chamber  providing an empty carton of Pepsodent toothpaste 200g, imprinted with ‘Free Dental Checkup’ on it.
                        </span>
                        <br><br>
                        <span>
                            2. This offer will continue till April 30, 2021
                        </span>
                        <br><br>
                        <span>
                            3. This offer includes only one free dental checkup and consultation. No post-checkup diagnosis, treatment, medication, etc. will be considered as subject to this offer.
                        </span>
                        <br><br>
                        <span>
                            4. Unilever Bangladesh Limited reserves all rights to change, amend or cancel the terms and conditions of this offer at any time.

                        </span>
                        <br><br>
                        <span>
                            5. All images and videos associated with this program will be used for marketing and social media platforms of Pepsodent or Unilever Bangladesh Limited.
                        </span>
                    </div>
                    <div class="form-check mt-4" style="color: #E7012E;text-align: center;">
                        <input type="checkbox" class="form-check-input" id="acceptCheck" value="1">
                        <label class="form-check-label" for="exampleCheck1">সকল শর্তাবলী মেনে আমি উক্ত ক্যাম্পেইনে অংশগ্রহণ করলাম</label>
                      </div>
                    <div class="row text-center mt-4">
                        <div class="col-md-5"></div>
                        <div class="col-md-2 text-center">
                            <button type="button" class="btn rounded px-4 p-2" @click="savePepsodant();" style="border-radius: 50px !important;border:1px solid #E7012E;color:#E7012E;">সাবমিট করুন</button>
                        </div>
                        <div class="col-md-5"></div>
                    </div>
                </form>


            </div>
        </section>

    </div>
</template>

<script>
    import Mixin  from "../mixin.js";
    export default {
        mixins: [Mixin],
        data: function(){
            return {
                name: "",
                email: "",
                phone: "",
                address: "",
                upazila: "",
                district: "",
                division: ""
            }
        },
        methods: {
            savePepsodant(){
                var vm = this;
                if(vm.name==""){
                    alert("Please insert name");
                    return false;
                }
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(vm.email) || vm.email==""){
                // if($("#email").val()==""){
                    alert("Please insert a valid email address");
                    return false;

                }
                if(vm.phone==""){
                    alert("Please insert number");
                    return false;
                }
                if(vm.address==""){
                    alert("Please insert message");
                    return false;
                }
                if(vm.upazila==""){
                    alert("Please insert upazila");
                    return false;
                }
                if(vm.district==""){
                    alert("Please insert district");
                    return false;
                }
                if(vm.division==""){
                    alert("Please insert division");
                    return false;
                }
                if(!$("#acceptCheck").is(':checked')){
                    alert("Please accept all the conditions");
                    return false;
                }
                axios({ 
                        url: this.getApiUrl()+"savePepsodant",
                        method: "post",
                        // params: query,
                        data: $('#pepsodent').serialize() ,
                }).then(function (response) {
                    vm.name = "";
                    vm.email = "";
                    vm.phone = "";
                    vm.address = "";
                    vm.upazila = "";
                    vm.district = "";
                    vm.division = "";
                    $("#acceptCheck").val("");
                    alert(response.data.message);
                    // vm.$router.push('/user/success') 
                    
                }).catch(function (error) {
                    vm.error = error
                });
            }
        }

    }
</script>

<style scoped>
    .color-default{
        color: #E7012E !important;
    }
    .contact-form input,
.contact-form textarea,
.contact-form button {
    border: 1px solid #E7012E !important;
}

input::placeholder {
    color: #E7012E !important;
}
.contact-form button {
    background: #E7012E;
}

.border-round{
    border-radius: 191px;
}
@media only screen and (min-width: 320px) and (max-width: 991px) {
    #header1{
        font-size: 16px;
        line-height: 1;
    }

}
</style>