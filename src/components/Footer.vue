<template>
    <div>
        <section class="footer">
	        <div class="container">
	            <div class="row">
	                <div class="col-md-3 col-sm-6 call-us">
	                    <h5 class="font-weight-normal text-info">Call Us</h5>
	                    <ul>
	                        <li><a href="tel:09-999-666-999" class="text-secondary"><i class="fa fa-phone p-1" aria-hidden="true"></i>09-999-666-999 <br><b>(8 am - 12 pm, 7 days a week)</b></a></li>
	                        <li><a href="mailto:careline.bd@unilever.com" class="text-secondary"><i class="fa fa-envelope p-1" aria-hidden="true"></i>careline.bd@unilever.com</a></li>
	                    </ul>
	                </div>
	                <div class="col-md-3 col-sm-6 archives">

	                    <h5 class="font-weight-normal text-info">Archives</h5>
	                    <ul>
	                        <li class="text-secondary"><a target="_blank" href="https://www.facebook.com/media/set/?vanity=SensitiveExpert&set=a.144502606987486" style="text-decoration: none;color: #6c757d!important"> Free Dental Camp </a></li>
	                        <li class="text-secondary">Scientific Seminar</li>
	                        <li class="text-secondary">WOHD</li>
	                    </ul>
	                </div>
	                <div class="col-md-3 col-sm-6 follow-us my-auto">
	                    <h5>Follow Us On</h5>
	                    <ul>
	                        <li class="p-2 mx-1 rounded-circle">
	                        	<a target="_blank" href="https://www.facebook.com/SensitiveExpert" style="color: white;">
	                        		<i class="fa fa-facebook" aria-hidden="true"></i>
	                        	</a>
	                        </li>
	                        <li class="p-2 mx-1 rounded-circle">
	                        	<a target="_blank" href="https://www.youtube.com/channel/UCfErz4OnrzZM4nej4J833yw" style="color: white;">
	                        		<i class="fa fa-youtube-play" aria-hidden="true"></i>
	                        	</a>
	                        </li>
	                    </ul>
	                </div>
	                <div class="col-md-3 col-sm-6 text-white py-2 visitors text-center rounded my-auto">
	                    <h2 style="font-size:1.5rem;" id="counter">0</h2>
	                    <h3 style="font-size:1.1rem;">Current<br>Visitors</h3>
	                </div>
	            </div>
	        </div>
	    </section>
	    <div class="bottom" id="alert">
			The Sensetive Expert website employs cookies to improve your user experience. We have updated our cookie policy to reflect changes in the law on cookies and tracking technologies used on websites. If you continue on this website, you will be providing your consent to our use of cookies.
		  	<br>

		  	<router-link to="/cookies" tag="button" class="mr-1" onclick="accpetCookie()"> Learn More</router-link>
		  	
		  	<button @click="accpetCookie()">
		    	Click here for accpet cookie
		 	</button>
		</div>
		<!-- <div class="scroll">
		  website content
		</div> -->
    </div>
</template>

<script>
	import Mixin  from "../mixin.js";
    export default {
        name: 'Footer',
        mixins: [Mixin],
        mounted(){
        	var vm = this;
        	if (this.getCookie('accepted') === 'yes') {
		        document.getElementById("alert").style.display = "none";
		    }
		    vm.getcounter();
        },
        methods: {
        	accpetCookie() {
		        this.setCookie('accepted', 'yes', 100);
		    },
		    setCookie(c_name, value, exdays) {
		        var exdate = new Date();
		        exdate.setDate(exdate.getDate() + exdays);
		        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
		        document.cookie = c_name + "=" + c_value;
		        document.getElementById("alert").style.display = "none";
		    },
		    getCookie(c_name) {
		        var i, x, y, ARRcookies = document.cookie.split(";");
		        for (i = 0; i < ARRcookies.length; i++) {
		            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		            x = x.replace(/^\s+|\s+$/g, "");
		            if (x == c_name) {
		                return unescape(y);
		            }
		        }
		    },

		    getcounter(){
	            axios({ 
	                    url: this.getApiUrl()+"getcounter",
	                    method: "get"
	            }).then(function (response) {
	                $("#counter").text(response.data);
	            }).catch(function (error) {
	                vm.error = error
	            });
	        }
        }
    }
</script>

<style>
  .bottom {
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	  background: darkgrey;
	  color: #fff;
	  padding:1%;
	}

	.scroll {
	  min-height: 1500px;
	}
</style>
