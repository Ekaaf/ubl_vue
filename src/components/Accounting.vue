<template>
    <div class="account-background">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="icon-color">
                        <i class="fa fa-thumbs-o-up style" aria-hidden="true"></i>
                        <h1 class="bold">60</h1>
                        <p class="fdc">FDC Organized</p>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="icon-color">
                        <i class="fa fa-users style" aria-hidden="true"></i>
                        <h1 class="bold">100,00,00</h1>
                        <p class="fdc">Pantient Reched</p>
                    </div>
                </div>


                <div class="col-md-3">
                    <div class="icon-color">
                        <i class="fa fa-spinner style" aria-hidden="true"></i>
                        <h1 class="bold">100,00,00</h1>
                        <p class="fdc">Samples Distributed</p>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="icon-color">
                        <i class="fa fa-user-md style" aria-hidden="true"></i>
                        <h1 class="bold">35</h1>
                        <p class="fdc">Seminar Organized</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
  import Mixin  from "../mixin.js";
  import { authHeader } from '../auth';
    export default {
        name: 'Accounting',
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
