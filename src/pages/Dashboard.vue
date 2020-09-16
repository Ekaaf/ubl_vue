<template>
    <div class="body">
        <div class="container">
            <div class="row no-gutters align-items-center" style="margin-top: 5%;margin-left: 5%;margin-bottom: 5%;">
                <router-link to="/user/daily-visit">
                    <img src="../../public/icon/daily.png" alt="" style="width: 50%" class="rounded mx-auto d-block">
                </router-link>
                <p class="text-color">Daily Visit</p>
            </div>

            <div class="row" style="background: rgb(43, 43, 168);height: 3px;"></div>

            

            <div class="row no-gutters align-items-center" style="margin-top: 5%;margin-left: 5%;">
                <router-link to="/user/add-store">
                    <img src="../../public/icon/Icon-02.png" alt="" style="width: 50%" class="rounded mx-auto d-block">
                </router-link>
                <p class="text-color">Add Stores</p>
            </div>

            <div class="row no-gutters align-items-center" style="margin-top: 5%;margin-left: 5%;">
                <router-link to="/user/audit">
                    <img src="../../public/icon/Icon-03.png" alt="" style="width: 50%" class="rounded mx-auto d-block">
                </router-link>
                <p class="text-color">Audit</p>
            </div>

            <div class="row no-gutters align-items-center" style="margin-top: 5%;margin-left: 5%;margin-bottom: 5%;">
                <router-link to="/user/research">
                    <img src="../../public/icon/Icon-04.png" alt="" style="width: 50%" class="rounded mx-auto d-block">
                </router-link>
                <p class="text-color">Research</p>
            </div>
           
        </div>
  	</div>
</template>

<script>
    export default {
        name: 'Dashboard'
    }
</script>

<style>
  .text-color{
    color: #2B2BA8;
    text-align: center;
  }
</style>
