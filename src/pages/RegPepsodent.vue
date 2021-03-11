<template>
    <div style="margin-top: 3px;">

        <section class="contact-us">
            <div class="container">
                <div class="container-fluid px-5">
                    <div class="row justify-content-center py-4" >
                        <div class="col-8 justify-content-center py-1" style="background: white;border-radius: 191px;">
                            <h3 class="justify-content-center" style="font-weight: bold;color: white;text-align: center;;line-height: 164.06%;letter-spacing: 0.05em;background: #E7012E;border-radius: 191px;">
                                <router-link class="nav-item nav-link"  to="/register/pepsodent" style="color: white;font-family: 'Siyam Rupali';">নিম্নে আপনার তথ্যসমূহ প্রদান করুন</router-link>
                            </h3>
                        </div>
                        
                    </div>
                </div>
                <form class="contact-form" id="contactForm">
                    <div class="row">

                        <div class="form-group col-md-12 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="contact_name" id="contact_name" name="contact_name" placeholder="নাম">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="contact_message" id="contact_message" name="contact_message" rows="3" placeholder="ইমেইল">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="contact_message" id="contact_message" name="contact_message" rows="3" placeholder="ফোন নাম্বার">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="contact_name" id="contact_name" name="contact_name" placeholder="ঠিকানা">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="email" class="form-control border-round" v-model="contact_email" id="contact_email" name="contact_email" placeholder="উপজেলা">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="text" class="form-control border-round" v-model="contact_name" id="contact_name" name="contact_name" placeholder="জেলা">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="email" class="form-control border-round" v-model="contact_email" id="contact_email" name="contact_email" placeholder="বিভাগ">
                        </div>
                    </div>
                    <div class="row justify-content-center my-2">
                        <div class="col-3 justify-content-center py-3" style="background: white;border-radius: 191px;">
                            <h3 class="justify-content-center py-2" style="font-weight: bold;color: white;text-align: center;;line-height: 164.06%;letter-spacing: 0.05em;background: #E7012E;border-radius: 191px;">
                                শর্তাবলী
                            </h3>
                        </div>
                    </div>
                    <div class="contact-form p-5" style="background: #E7012E; color: white;border-radius: 50px;"> 
                        <span>
                            ১. ফ্রী ডেন্টাল চেকআপ পেতে পেপসোডেন্ট জার্মিচেক টুথপেস্ট এর একটি খালি মোড়ক  ডাক্তারের চেম্বারে জমা দিতে হবে। 
                        </span>
                        <br><br>
                        <span>
                            ২. এই ফ্রী ডেন্টাল চেকআপ এর অফার আগামী এক মাস পর্যন্ত অব্যাহত থাকবে।
                        </span>
                        <br><br>
                        <span>
                            ৩. এই অফারে শুধুমাত্র একবার বিনামূল্যে চেকআপ এবং পরামর্শ অন্তর্ভুক্ত থাকবে। চেকআপ পরবর্তী কোন চিকিৎসা, ওষুধ ইত্যাদি এই অফারের আওতাধীন হিসেবে বিবেচনা করা হবে না।
                        </span>
                        <br><br>
                        <span>
                            ৪. ইউনিলিভার বাংলাদেশ লিমিটেড যেকোনো সময়ে এই অফারের শর্তাবলী এবং সময়কাল পরিবর্তন, সংশোধন বা বাতিল করতে পারবে।
                        </span>
                        <br><br>
                        <span>
                            ৫. এই প্রোগ্রাম এর সাথে সম্পৃক্ত সকল ছবি এবং ভিডিও, পেপসোডেন্ট বা ইউনিলিভার বাংলাদেশ লিমিটেডে এর বিপণন এবং সোশ্যাল মিডিয়া প্ল্যাটফর্মের জন্য ব্যবহারের অধিকার থাকবে।
                        </span>
                    </div>

                    <div class="form-check mt-4" style="color: #E7012E;text-align: center;">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">সকল শর্তাবলী মেনে আমি উক্ত ক্যাম্পেইনে অংশগ্রহণ করলাম</label>
                      </div>
                    <div class="row text-center mt-4">
                        <div class="col-md-5"></div>
                        <div class="col-md-2 text-center">
                            <button type="button" class="btn text-white rounded px-4 p-2" @click="saveContactUs();" style="border-radius: 50px !important;">সাবমিট করুন</button>
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
        data: function(){
            return {
                aaaa: "আমার"

            }
        },

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
</style>