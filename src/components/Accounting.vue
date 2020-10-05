<template>
    <div class="account-background">
        <div class="container">
            <div class="row">
                <div class="custom-width pb-2">
                    <div class="icon-color">
                        <i class="fa fa-thumbs-o-up style" aria-hidden="true"></i><br>
                        <h1 class="bold">181</h1>
                        <p class="fdc">FDC Organized</p>
                    </div>
                </div>

                <div class="custom-width pb-2">
                    <div class="icon-color">
                        <i class="fa fa-users style" aria-hidden="true"></i>
                        <h1 class="bold">728672</h1>
                        <p class="fdc">Patients Reached</p>
                    </div>
                </div>


                <div class="custom-width pb-2">
                    <div class="icon-color">
                        <i class="fa fa-spinner style" aria-hidden="true"></i>
                        <h1 class="bold">750524</h1>
                        <p class="fdc">Sample Distributed</p>
                    </div>
                </div>

                <div class="custom-width pb-2">
                    <div class="icon-color">
                        <i class="fa fa-user-md style" aria-hidden="true"></i>
                        <h1 class="bold">19</h1>
                        <p class="fdc">Seminar Organized</p>
                    </div>
                </div>

                <div class="custom-width">
                    <div class="icon-color">
                        <i class="fa fa-user-md style" aria-hidden="true"></i>
                        <h1 class="bold">4</h1>
                        <p class="fdc">International Congress</p>
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

<style scoped>
.custom-width{
    background: #843d71;
    padding: 0!important;
    margin: 1%;
    width: 18%;
}  
.col {
    background: #843d71;
    padding: 0!important;
    margin: 1%;
}

@media (max-width: 992px){
    .custom-width {
        width: 100%!important;
    }
}
</style>
