<template>
    <div class="body">
        <div class="container">
            <div class="row justify-content-center align-items-center" style="margin-top: 20%;">
                <p>Your Report has been <br> updated Successfully!</p>
            </div>

            <div class="row justify-content-center align-items-center">
                <div class="circle-tick"> 
                    <i class="fa fa-check fa-3x" style="color: white;position:absolute;top:22%;right:25%;" aria-hidden="true"></i>
                </div>
            </div>

            <div class="row justify-content-center align-items-center" style="margin-top: 5%;">
                <router-link to="/user/dashboard">
                <button style="width:100%;font-size:13px;background-color:#3454D2;" type="button" class="btn btn-primary btn-block">Back To Dashboard</button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Success',
    }
</script>

<style>
  
</style>
