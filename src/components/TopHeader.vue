<template>
    <!---Top-Header---Start--->
    <div>
        <section class="top-header desktop">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-12 menu">
                        <ul>
                            <li><a href="index.html#"><i class="fa fa-envelope-o pes" aria-hidden="true"></i>careline.bd@unilever.com</a></li>
                            <li><a href="index.html#"><i class="fa fa-phone pes" aria-hidden="true"></i>09-666-999-666</a></li>
                        </ul>
                    </div>

                    <div class="col-md-3 col-sm-12 social-icon">
                        <ul>
                            <li><a href="index.html"><i class="fa fa-facebook-official facbok" aria-hidden="true"></i></a></li>
                            <li><a href="index.html"><i class="fa fa-youtube-play facbok" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        <section class="top-header mobile">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-12 menu">
             
                           <a href="index.html#"><i class="fa fa-envelope-o pes" aria-hidden="true"></i>careline.bd@unilever.com</a>
                            
                        
                    </div>

                    <div class="col-md-3 col-sm-12 social-icon">
                        <ul>
                             <li class="number"><a href="index.html#"><i class="fa fa-phone pes" aria-hidden="true"></i>09-666-999-666</a></li>
                            <li><a href="index.html"><i class="fa fa-facebook-official facbok" aria-hidden="true"></i></a></li>
                            <li><a href="index.html"><i class="fa fa-youtube-play facbok" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        <!---Top-Header---End--->
    </div>
</template>

<script>
  import Mixin  from "../mixin.js";
  import { authHeader } from '../auth';
    export default {
        name: 'TopHeader',
        mixins: [Mixin],
        data: function() {
            return {
                user:[],
                image:'' 
            }
        },
        created(){
          // var accessToken = JSON.parse(this.getAccesstoken())
          // if(accessToken){
          //   this.user = accessToken.user
          //   if(this.user.type==1){
          //     this.user.type="Admin"
          //   }
          //   else if(this.user.type==2){
          //     this.user.type="BDO"
          //   }
          //   else{
          //     this.user.type="BDS"
          //   }
          //   if(this.user.image){
          //     this.image = 'http://'+document.domain+'/admin/'+this.user.image;
          //     this.image = 'http://npab.net/admin/'+this.user.image;
          //   }
          //   else{
          //     this.image = "/assets/images/user.png"
          //   }
          // }
          
          // console.log(this.image)
        },
        methods: {
          // logout(){
          //   var vm = this;
          //   axios({ 
          //           headers: authHeader(),
          //           url: this.getApiUrl()+"logout",
          //           method: "post"
          //   }).then(function (response) {
          //       localStorage.clear()
          //       vm.$router.push('/') 
          //   }).catch(function (error) {
          //       vm.$router.push('/') 
          //   });
          // }
        }
    }
</script>

<style>
  
</style>
