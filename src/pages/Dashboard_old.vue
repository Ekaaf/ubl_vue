<template>
    <div class="body">
        <div class="container">
            <div class="row no-gutters justify-content-center align-items-center" style="margin-top: 15%;">
                <div class="col-6">
                    <router-link to="/user/add-store">
                        <img src="../../public/icon/Icon-02.png" alt="" style="width: 70%" class="rounded mx-auto d-block">
                    </router-link>
                    <p class="text-color">Add Stores</p>
                </div>
            </div>
            <div class="row no-gutters" style="margin-top: 5%;">
                <div class="col-6" style="text-align: center;">
                	<router-link to="/user/audit">
                        <img src="../../public/icon/Icon-04.png" alt="" style="width: 70%;" class="rounded mx-auto d-block">
		            </router-link>
	              	<p class="text-color">Audit</p>
                </div>
                <div class="col-6">
                    <img src="../../public/icon/Icon-03.png" alt="" style="width: 70%;" class="rounded mx-auto d-block">
                    <p class="text-color">Research</p>
                </div>
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
