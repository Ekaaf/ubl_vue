<template>
    <div>
        <section class="contact-us">
            <div class="container">
                <div class="row pb-4 text-center color-default">
                    <div class="col-sm-12 col-md-12">
                        <h2 class="contact-after">Contact Us</h2>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="row">

                        <div class="form-group col-md-4 col-sm-12">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
                        </div>
                        <div class="form-group col-md-4 col-sm-12">
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number">
                        </div>
                        <div class="form-group col-md-12 col-sm-12">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="messege"></textarea>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-5"></div>
                        <div class="col-md-2 text-center">
                            <button type="button" class="btn text-white rounded px-4 p-2">SUBMIT</button>
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
  import { authHeader } from '../auth';
    export default {
        name: 'ContactUs',
        mixins: [Mixin],
        data: function() {
            return {
                user:[],
                image:'' 
            }
        },
        created(){
        },
        methods: {
        }
    }
</script>

<style>
  
</style>
