<template>
    <div style="margin-top: 3px;">

        <section class="contact-us">
            <div class="container">
                <div class="row pb-4 text-center color-default">
                    <div class="col-sm-12 col-md-12">
                        <h2 class="contact-after">Enter your details below</h2>
                    </div>
                </div>
                <form class="contact-form" id="contactForm">
                    <div class="row">

                        <div class="form-group col-md-6 col-sm-12">
                            <input type="text" class="form-control" v-model="contact_name" id="contact_name" name="contact_name" placeholder="First Name">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="email" class="form-control" v-model="contact_email" id="contact_email" name="contact_email" placeholder="Last Name">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <input type="text" class="form-control" v-model="contact_message" id="contact_message" name="contact_message" rows="3" placeholder="Email Address">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <input type="text" class="form-control" v-model="contact_message" id="contact_message" name="contact_message" rows="3" placeholder="Phone Number">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="text" class="form-control" v-model="contact_name" id="contact_name" name="contact_name" placeholder="Address">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="email" class="form-control" v-model="contact_email" id="contact_email" name="contact_email" placeholder="Upazila">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="text" class="form-control" v-model="contact_name" id="contact_name" name="contact_name" placeholder="District">
                        </div>
                        <div class="form-group col-md-6 col-sm-12">
                            <input type="email" class="form-control" v-model="contact_email" id="contact_email" name="contact_email" placeholder="Division">
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-5"></div>
                        <div class="col-md-2 text-center">
                            <button type="button" class="btn text-white rounded px-4 p-2" @click="saveContactUs();">SUBMIT</button>
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
</style>