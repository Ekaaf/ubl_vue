<template>
    <div>
        <!-- Modal -->
	    <div class="modal fade register-modal" id="reg_dental_camp_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="z-index:999999999;">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                    <br>
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> Registration</h5>
	                </div>
	                <div class="modal-body">
	                    <form id="reg_dental_camp_form">
	                        
	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" v-model="reg_name" id="reg_name" name="reg_name" placeholder="Name">
	                        </div>
	                        <div class="form-group mb-3">
	                            <input type="email" class="form-control color-default rounded-pill" v-model="reg_email" id="reg_email" name="reg_email" placeholder="Email">
	                        </div>
	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" v-model="reg_phone" id="reg_phone" name="reg_phone" placeholder="Phone Number">
	                        </div>

	                        <div class="form-group mb-3">
	                            <select class="form-control color-default rounded-pill" v-model="reg_type" id="reg_type" name="reg_type" @change="updatePlaceholder();">
	                            	<option value="">Select</option>
	                            	<option value="Doctor">Doctor</option>
	                            	<option value="Company">Company</option>
	                            	<option value="School">School</option>
	                            	<option value="College">College</option>
	                            	<option value="University">University</option>
	                            </select>
	                        </div>

	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" v-model="reg_info" id="reg_info" name="reg_info" placeholder="Phone Number" style="display:none;">
	                        </div>

							<div class="form-group text-center">
								<button type="button" class="btn btn-sub-modal color-default" @click="regDentalCamp();">Submit & Register</button>
							</div>
	                    </form>
	                </div>
	                <!--<div class="modal-footer">
	                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	                    <button type="button" class="btn bg-white color-default">Submit</button>
	                </div>-->
	            </div>
	        </div>
	    </div>


	    <div class="modal fade register-modal" id="apply_dental_camp_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="z-index:999999999;">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                    <br>
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> Apply for free sample</h5>
	                </div>
	                <div class="modal-body">
	                    <form id="apply_dental_camp_form">
	                        <input type="hidden" name="apply_userid" id="apply_userid">
	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" id="apply_name" name="apply_name" placeholder="Name" readonly>
	                        </div>
	                        <div class="form-group mb-3">
	                            <input type="email" class="form-control color-default rounded-pill" id="apply_email" name="apply_email" placeholder="Email" readonly>
	                        </div>
	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" id="apply_phone" name="apply_phone" placeholder="Phone Number" readonly>
	                        </div>

	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" id="apply_address" name="apply_address" placeholder="Address">
	                        </div>

							<div class="form-group text-center">
								<button type="button" class="btn btn-sub-modal color-default" @click="applySave();">Submit</button>
							</div>
	                    </form>
	                </div>
	                <!--<div class="modal-footer">
	                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	                    <button type="button" class="btn bg-white color-default">Submit</button>
	                </div>-->
	            </div>
	        </div>
	    </div>


	    <div class="modal fade bd-example-modal-lg register-modal" id="doctor_edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="z-index:999999999;">
	        <div class="modal-dialog modal-lg" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle">Please click to any field to edit your profile</h5>
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    <form id="doctor_edit_form" enctype="multipart/form-data">
	                        <input type="hidden" id="doctor_id" name="doctor_id">

	                        <div class="form-group row mb-3">
	                            <label for="staticEmail" class="col-sm-3 col-form-label color-white">Update Image</label>
	                            <div class="col-sm-9">
	                            	<input type="file" class="form-control color-default rounded-pill" id="file" name="file" @change="showImage();">
	                            </div>
	                        </div>

	                        <div class="form-group row mb-3">
	                        	<label for="staticEmail" class="col-sm-3 col-form-label color-white">Image</label>
	                            <div class="col-sm-9">
	                            	<img src="https://ubl.sensetiveexpert.com/ubl_laravel/public/images/default.jpg" class="w-25" id="previewImage" @error="imageUrlAlt">
	                            	<button type="button" @click="clearImage();" id="clearButton" style="display:none;">Clear</button>
	                            </div>
	                            
	                        </div>
	                        
	                        <div class="form-group row mb-3">
	                        	<label for="staticEmail" class="col-sm-3 col-form-label color-white">Name</label>
	                            <div class="col-sm-9">
	                            	<input type="text" class="form-control color-default rounded-pill" v-model="doctor_name" id="doctor_name" name="doctor_name" placeholder="Name">
	                        	</div>
	                        </div>

	                        <div class="form-group row mb-3">
	                        	<label for="staticEmail" class="col-sm-3 col-form-label color-white">Email</label>
	                            <div class="col-sm-9">
	                            	<input type="text" class="form-control color-default rounded-pill" v-model="doctor_email" id="doctor_email" name="doctor_email" placeholder="Doctor Email" >
	                        	</div>
	                        </div>

	                        <div class="form-group row mb-3">
	                        	<label for="staticEmail" class="col-sm-3 col-form-label color-white">Department</label>
	                            <div class="col-sm-9">
	                            	<select class="form-control rounded-pill" id="department" name="department" v-model="department">
								      <option value="" selected>Department</option>
                            			<option v-for="option in departmentOptions" :value="option">{{option}}</option>
								    </select>
	                        	</div>
	                        </div>

	                        <div class="form-group row mb-3">
	                        	<label for="staticEmail" class="col-sm-3 col-form-label color-white">Designation</label>
	                            <div class="col-sm-9">
	                            	<input type="text" class="form-control color-default rounded-pill" v-model="doctor_designation" id="doctor_designation" name="doctor_designation" placeholder="Doctor Designation" >
	                        	</div>
	                        </div>

	                        
	                        <div class="form-group row mb-3">
	                            <label for="staticEmail" class="col-sm-3 col-form-label color-white">BMDC No</label>
	                            <div class="col-sm-9">
	                            	<input type="text" class="form-control color-default rounded-pill" v-model="bmdc_number" id="bmdc_number" name="bmdc_number" placeholder="BMDC Number" disabled>
	                        	</div>
	                        </div>

	                        <div class="form-group row mb-3">
	                            <label for="staticEmail" class="col-sm-3 col-form-label color-white">Specialization</label>
	                            <div class="col-sm-9">
	                            	<input type="text" class="form-control color-default rounded-pill" v-model="specialization" id="specialization" name="specialization" placeholder="Specialization" >
	                            </div>
	                        </div>

	                        <div class="form-group row mb-3">
	                            <label for="staticEmail" class="col-sm-3 col-form-label color-white" style="font-size:15px">Chamber Name</label>
	                            <div class="col-sm-9">
	                            	<input type="email" class="form-control color-default rounded-pill" v-model="doctor_chamber_name" id="doctor_chamber_name" name="doctor_chamber_name" placeholder="Chamber Name">
	                            </div>
	                        </div>
	                        <div class="form-group row mb-3">
	                            <label for="staticEmail" class="col-sm-3 col-form-label color-white" style="font-size:15px; padding: 0px;">Chamber Address</label>
	                            <div class="col-sm-9">
	                            	<input type="text" class="form-control color-default rounded-pill" v-model="doctor_chamber_address" id="doctor_chamber_address" name="doctor_chamber_address" placeholder="Doctor Chamber Address">
	                        	</div>
	                        </div>

	                        <div class="form-group row mb-3">
	                            <label for="staticEmail" class="col-sm-3 col-form-label color-white" style="font-size:15px">Education</label>
	                            <div class="col-sm-9">
	                            	<input type="email" class="form-control color-default rounded-pill" v-model="doctor_education" id="doctor_education" name="doctor_education" placeholder="Doctor Education">
	                            </div>
	                        </div>

	                        <div class="form-group row mb-3">
	                            <label for="staticEmail" class="col-sm-3 col-form-label color-white">Phone</label>
	                            <div class="col-sm-9">
	                            	<input type="text" class="form-control color-default rounded-pill" v-model="doctor_phone" id="doctor_phone" name="doctor_phone" placeholder="Doctor Phone" >
	                            </div>
	                        </div>

	                        

	                        

							<div class="form-group text-center">
								<button type="button" class="btn btn-sub-modal color-default" @click="updateDoctor();">Update</button>
							</div>
	                    </form>
	                </div>
	                <!--<div class="modal-footer">
	                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	                    <button type="button" class="btn bg-white color-default">Submit</button>
	                </div>-->
	            </div>
	        </div>
	    </div>


	    <div class="modal fade register-modal" id="user_edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="z-index:999999999;">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> Edit Information</h5>
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    <form id="user_edit_form">
	                        <input type="hidden" id="user_id" name="user_id">
	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" v-model="user_name" id="user_name" name="user_name" placeholder="Name">
	                        </div>
	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" v-model="user_phone" id="user_phone" name="user_phone" placeholder="Phone" >
	                        </div>

	                        <div class="form-group mb-3">
	                            <input type="text" class="form-control color-default rounded-pill" v-model="user_email" id="user_email" name="user_email" placeholder="Email" >
	                        </div>

							<div class="form-group text-center">
								<button type="button" class="btn btn-sub-modal color-default" @click="updateUser();">Update</button>
							</div>
	                    </form>
	                </div>
	                <!--<div class="modal-footer">
	                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	                    <button type="button" class="btn bg-white color-default">Submit</button>
	                </div>-->
	            </div>
	        </div>
	    </div>


	    <div class="modal fade register-modal" id="change_pass" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="z-index:999999999;">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> Edit Information</h5>
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    <form id="change_pass_form">
	                        <input type="hidden" id="pass_id" name="pass_id">
	                        <div class="form-group mb-3">
	                            <input type="password" class="form-control color-default rounded-pill" v-model="current_pass" id="current_pass" name="current_pass" placeholder="Current Password">
	                        </div>
	                        <div class="form-group mb-3">
	                            <input type="password" class="form-control color-default rounded-pill" v-model="new_pass" id="new_pass" name="new_pass" placeholder="New Password" >
	                        </div>

	                        <div class="form-group mb-3">
	                            <input type="password" class="form-control color-default rounded-pill" v-model="con_new_pass" id="con_new_pass" name="con_new_pass" placeholder="Confirm New Password" >
	                        </div>

							<div class="form-group text-center">
								<button type="button" class="btn btn-sub-modal color-default" @click="updatePassword();">Update</button>
							</div>
	                    </form>
	                </div>
	                <!--<div class="modal-footer">
	                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	                    <button type="button" class="btn bg-white color-default">Submit</button>
	                </div>-->
	            </div>
	        </div>
	    </div>

	    <!-- Modal  Edit Information-->
	    <div class="modal fade edit-info-modal" id="exampleModalProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> Edit Information</h5>
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    <form>
	                        <div class="row">
	                            <div class="col-md-6 border-right2">
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="exampleFormControlInput12" placeholder="Name">
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="exampleFormControlInput4" placeholder="Specialization">
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="exampleFormControlInput6" placeholder="Chamber Name">
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="exampleFormControlInput17" placeholder="Chamber Address (click to edit)">
	                                </div>
	                                <div class="form-group">
	                                    <input type="email" class="form-control color-default rounded-pill" id="exampleFormControlInput18" placeholder="Email">
	                                </div>
	                                <div class="form-group">
	                                    <input type="number" class="form-control color-default rounded-pill" id="exampleFormControlInput122" placeholder="Phone Number">
	                                </div>
	                            </div>
	                            <div class="col-md-6">
	                                <div class="text-center mb-2">
	                                    <button type="button" class="btn btn-add-img">+ add image</button>
	                                </div>
	                                <div class="form-group">
	                                    <input type="password" class="form-control color-default rounded-pill" id="exampleFormControlInput62" placeholder="Create Password">
	                                </div>
	                                <div class="form-group row-position-relative">
	                                    <input type="text" class="form-control color-default rounded-pill" id="exampleFormControlInput1744" placeholder="BMDC Certificate">
	                                    <span class="bg-default color-white view-cert">View </span>
	                                </div>
	                                <div class="form-group">
	                                    <input type="password" class="form-control color-default rounded-pill" id="exampleFormControlInput158" placeholder="Update Password">
	                                </div>
	                                <div class="form-group">
	                                    <input type="password" class="form-control color-default rounded-pill" id="exampleFormControlInput1262" placeholder="Re-enter Password">
	                                </div>
	                            </div>
	                        </div>
	                        <div class="row mt-3 small-inputs">
	                            <div class="col-md-6">
	                                <div class="text-left color-white">Select Your Working Days</div>
	                                <div class="form-group row">
	                                    <input type="text" class="col-md-2 color-default rounded-pill" id="exampleFormControlInput123" placeholder="Sat">
	                                    <input type="text" class="col-md-2 color-default rounded-pill" id="exampleFormControlInput1266" placeholder="Mon">
	                                    <input type="text" class="col-md-2 color-default rounded-pill" id="exampleFormControlInput125" placeholder="Tue">
	                                    <input type="text" class="col-md-2 color-default rounded-pill" id="exampleFormControlInput126" placeholder="Wed">
	                                    <input type="text" class="col-md-2 color-default rounded-pill" id="exampleFormControlInput127" placeholder="Thr">
	                                    <input type="text" class="col-md-2 color-default rounded-pill" id="exampleFormControlInput129" placeholder="Fri">
	                                </div>
	                            </div>
	                            <div class="col-md-6">
	                                <div class="text-left color-white">Select Your Working Hours</div>
	                                <div class="form-group row">
	                                    <input type="text" class="col-md-3 color-default rounded-pill" id="exampleFormControlInput12345" placeholder="00:00">
	                                    <input type="text" class="col-md-2 color-default rounded-pill" id="exampleFormControlInput124665" placeholder="AM">
	                                    <div class="col-md-2 color-white text-center">To</div>
	                                    <input type="text" class="col-md-3 color-default rounded-pill" id="exampleFormControlInput125335" placeholder="00:00">
	                                    <input type="text" class="col-md-2 color-default rounded-pill" id="exampleFormControlInput1212456" placeholder="PM">
	                                </div>
	                            </div>
	                        </div>
	                        <div class="mt-2 text-center">
	                            <button type="button" class="btn btn-sub-modal color-default  px-4 p-2">Submit & Register</button>
	                        </div>
	                    </form>
	                </div>

	            </div>
	        </div>
	    </div>


	    <div class="modal fade" id="exampleModal-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content">
	                <div class="modal-header">
	                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
	                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    <form>
	                        <div class="form-group">
	                            <label for="recipient-name" class="col-form-label">Recipient:</label>
	                            <input type="text" class="form-control" id="recipient-name">
	                        </div>
	                        <div class="form-group">
	                            <label for="message-text" class="col-form-label">Message:</label>
	                            <textarea class="form-control" id="message-text"></textarea>
	                        </div>
	                    </form>
	                </div>
	                <div class="modal-footer">
	                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	                    <button type="button" class="btn btn-primary">Send message</button>
	                </div>
	            </div>
	        </div>
	    </div>


	    <div class="modal fade edit-info-modal" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true" style="z-index: 9999999">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> <span>Login</span></h5>
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    <form>
	                        <div class="row">
	                            <div class="col-md-6 border-right2">
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="login_email" name="login_email" placeholder="Email / BMDC No." v-model="login_email">
	                                </div>
	                                <!-- <div class="form-group">
	                                    <input type="password" class="form-control color-default rounded-pill" id="login_password" name="login_password" placeholder="Password" v-model="login_password">
	                                </div> -->

	                                <div class="input-group mb-3">
									  	<input type="password" class="form-control color-default rounded-pill" id="login_password" name="login_password" placeholder="Password" v-model="login_password">
									  	<div class="input-group-append">
									    	<i class=" fa fa-eye" aria-hidden="true" style="position:absolute;margin-left:-25px;margin-top:10px;cursor:pointer;z-index:99999;" @click="showPassword('login_password');"></i>
									  	</div>
									</div>

	                                <div class="form-check mb-2">
										<input type="checkbox" class="form-check-input" id="login_agree">
										<label class="form-check-label" for="exampleCheck1" style="color: white;">
											I give my consent to Unilever Bangladesh and its affiliated third parties to use, store and process my given information and communicate with me in the future.
										</label>
									</div>

									<div class="form-check mb-2">
										<input type="checkbox" class="form-check-input" id="login_privacy">
										<label class="form-check-label" for="exampleCheck1" style="color: white;">
											I agree to  Unilever's <router-link to="/cookies" style="color: white;"> cookie </router-link> and <router-link to="/privacy" style="color: white;"> privacy policy</router-link>
										</label>
									</div>

									<div class="form-check mb-2">
										<input type="checkbox" class="form-check-input" id="login_age">
										<label class="form-check-label" for="exampleCheck1" style="color: white;">
											I am at least 18 years old
										</label>
									</div>
									<div class="form-group">
	                                    <a href="#" style="color: white;" @click="showForgetPass();">Forgot password?</a>
	                                </div>

	                                <div class="form-group ">
	                                	<div class="row">
	                                	<div class="col-6">
	                                		<div class="g-signin2" data-onsuccess="onLogin"></div>
	                                    </div>
	                                	<div class="col-6">
	                                		<button type="button" class="btn btn-sub-modal color-default" @click="login();">Login</button>
	                                		
	                                	</div>
	                                	</div>
	                                </div>
	                            </div>
	                            <div class="col-md-6">
	                            </div>
	                        </div>
	                        
	                    </form>
	                </div>

	            </div>
	        </div>
	    </div>


	    <div class="modal fade edit-info-modal" id="forget-modal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true" style="z-index: 9999999">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> <span>Forget Password</span></h5>
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    <form>
	                        <div class="row">
	                            <div class="col-md-8">
	                            	<!-- Your Email Address -->
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="forget_email" name="forget_email" placeholder="Write your email address" v-model="forget_email">
	                                </div>

	                                <div class="form-group">
	                                    <button type="button" class="btn btn-sub-modal color-default" @click="sendmail();">Send</button>
	                                </div>
	                            </div>
	                        </div>
	                        
	                    </form>
	                </div>

	            </div>
	        </div>
	    </div>


	    <div class="modal fade edit-info-modal" id="modal-loaded" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true" style="z-index: 9999999">
	        <div class="modal-dialog modal-dialog-centered" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> <span>Please sign-up & register to get a free sample</span></h5>
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    
	                </div>

	            </div>
	        </div>
	    </div>
	    
	    <div class="modal fade edit-info-modal" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModal" aria-hidden="true" style="z-index: 9999999">
	        <div class="modal-dialog" role="document">
	            <div class="modal-content bg-default">
	                <div class="modal-header">
	                    <h5 class="modal-title bg-white w-100 text-center p-2 " id="exampleModalLongTitle"> <span>New Here?</span></h5>
	                    <button type="button" class="close bg-default text-secondary" data-dismiss="modal" aria-label="Close">
	                        <span aria-hidden="true"><i class="fa fa-window-close" aria-hidden="true"></i></span>
	                    </button>
	                </div>
	                <div class="modal-body">
	                    <form id="signUpForm" enctype="multipart/form-data">
	                        <div class="row">
	                            <div class="col-md-6 border-right2">
	                            	<div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill asterisk" id="signup_name" name="signup_name" placeholder="* Name" v-model="signup_name">
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="email" name="email" placeholder="* Email" v-model="signup_email">
	                                </div>
	                                <div class="form-group">
	                                    <input type="number" class="form-control color-default rounded-pill" id="signup_phone" name="signup_phone" placeholder="* Phone Number" v-model="signup_phone">
	                                </div>
	                                <!-- <div class="form-group">
	                                    <input type="password" class="form-control color-default rounded-pill" id="password" name="password" placeholder="Password" v-model="signup_password">
	                                </div> -->

	                                <div class="input-group mb-3">
									  	<input type="password" class="form-control color-default rounded-pill" id="password" name="password" placeholder="* Password" v-model="signup_password">
									  	<div class="input-group-append">
									    	<i class=" fa fa-eye" aria-hidden="true" style="position:absolute;margin-left:-25px;margin-top:10px;cursor:pointer;z-index:99999;" @click="showPassword('password');"></i>
									  	</div>
									</div>
									
	                                <div class="form-group">
	                                    <input type="password" class="form-control color-default rounded-pill" id="con_password" name="con_password" placeholder="* Confirm Password" v-model="signup_con_password">
	                                </div>

	                                <div class="form-group" id="userdiv" style="margin-bottom:0px;">
									    <label for="exampleFormControlSelect1" style="color:white;">I am </label>
									    <select class="form-control rounded-pill" id="role_id" name="role_id" v-model="signup_role_id" @change="showDoctorReg();">
									      <option value="">* Select</option>
									      <option value="2">Doctor</option>
									      <option value="3">Patient</option>
									    </select>
									</div>

									<div class="form-group" id="filediv" style="display:none;margin-bottom: 0px;">
	                                    <input type="file" class="form-control color-default rounded-pill" id="file_reg" name="file_reg" >
	                                </div>

	                                <div class="form-check">
										<label class="form-check-label" for="exampleCheck1" style="color: red;font-size:12px;">
											* Marks field are mandatory
										</label>
									</div>
	                                <div class="form-check mb-2">
										<input type="checkbox" class="form-check-input" id="agree" name="agree" value="1">
										<label class="form-check-label" for="exampleCheck1" style="color: white;">
											I give my consent to Unilever Bangladesh and its affiliated third parties to use, store and process my given information and communicate with me in the future.
										</label>
									</div>

									<div class="form-check mb-2">
										<input type="checkbox" class="form-check-input" id="privacy" name="privacy" value="1">
										<label class="form-check-label" for="exampleCheck1" style="color: white;">
											I agree to  Unilever's <router-link to="/cookies" style="color: white;"> cookie </router-link> and <router-link to="/privacy" style="color: white;"> privacy policy</router-link>
										</label>
									</div>

									<div class="form-check mb-2">
										<input type="checkbox" class="form-check-input" id="age" name="age" value="1">
										<label class="form-check-label" for="exampleCheck1" style="color: white;">
											I am at least 18 years old
										</label>
									</div>
	                                <div class="form-group ">
	                                	<div class="row">
	                                	<div class="col-6">
	                                		<div class="g-signin2" data-onsuccess="onSignIn"></div>
	                                    </div>
	                                	<div class="col-6">
	                                		<button type="button" class="btn btn-sub-modal color-default" @click="signUp();">Sign Up</button>
	                                		
	                                	</div>
	                                	</div>
	                                </div>
	                                

	                            </div>
	                            <div class="col-md-6" id="doctor_reg_div" style="display:none;">
	                            	<div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="designation_reg" name="designation_reg" placeholder="Designation" v-model="designation_reg">
	                                </div>
	                                <div class="form-group">
	                                    <select class="form-control rounded-pill" id="department_reg" name="department_reg" v-model="department_reg">
									      <option value="" selected>Department</option>
                                			<option v-for="option in departmentOptions" :value="option">{{option}}</option>
									    </select>
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="specialization_reg" name="specialization_reg" placeholder="Specialization" v-model="specialization_reg" required>
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="chamber_name_reg" name="chamber_name_reg" placeholder="* Chamber Name" v-model="chamber_name_reg">
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="chamber_address_reg" name="chamber_address_reg" placeholder="* Chamber Address" v-model="chamber_address_reg">
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="education_reg" name="education_reg" placeholder="* Education" v-model="education_reg">
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="bmdc_number_reg" name="bmdc_number_reg" placeholder="* BMDC Number" v-model="bmdc_number_reg">
	                                </div>

	                                <div class="form-check mb-2">
										<input type="checkbox" class="form-check-input" id="location_reg" name="location_reg" value="1">
										<label class="form-check-label" for="exampleCheck1" style="color: white;">
											Take My Location as current Location
										</label>
									</div>
	                                <!-- <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="online_consultation_reg" name="online_consultation_reg" placeholder="Online Consultation" v-model="online_consultation_reg">
	                                </div>
	                                <div class="form-group">
	                                    <input type="text" class="form-control color-default rounded-pill" id="location_reg" name="location_reg" placeholder="Lat, Long" v-model="location_reg">
	                                </div> -->
	                                
	                            </div>
	                        </div>
	                        
	                    </form>
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
        name: 'Modals',
        data: function(){
            return {
            	signup_name : '',
            	signup_email : '',
            	signup_phone: '',
            	signup_password : '',
            	signup_con_password : '',
            	signup_role_id : '',
            	login_email : '',
            	login_password : '',
            	reg_name: '',
            	reg_email: '',
            	reg_phone: '',
            	reg_type: '',
            	reg_info: '',
            	doctor_name:'',
            	doctor_email: '',
            	doctor_designation: '',
            	doctor_institution: '',
            	bmdc_number: '',
            	specialization: '',	
            	doctor_chamber_name: '',
            	doctor_chamber_address: '',
            	doctor_education: '',
            	doctor_phone: '',
            	loggedinUserId: '',
            	user_name: '',
            	user_email: '',
            	user_phone: '',
            	current_pass: '',
            	new_pass: '',
            	con_new_pass: '',

            	forget_email: '',
            	// user: {
            	// 	id : 1
            	// },

            	designation_reg: '',
            	department_reg: '',
            	specialization_reg:'',
            	chamber_name_reg: '',
            	chamber_address_reg: '',
            	education_reg: '',
            	bmdc_number_reg: '',
            	online_consultation_reg: '',
            	location_reg: '',
            	department: "",
            	departmentOptions:['PAEDIATRIC DENTISTRY','DEPARTMENT OF PROSTHODONTICS','ORAL ANATOMY & PHYSIOLOGY','CONSERVATIVE DENTISTRY & ENDODONTICS','ORAL AND MAXILLOFACIAL SURGERY','ORAL PATHOLOGY & PERIODONTOLOGY','ORTHODONTICS','DEPARTMENT  OF LIFE SCIENCE','PERIODENTOLOGY & ORAL PATHOLOGY','FACULTY OF DENTISTRY','DIAGNOSIS DEPARTMENT','GENERAL & DENTAL PHARMACOLOGY','DENTAL PUBLIC HEALTH','DENTAL DEPARTMENT','HEALTH','DENTAL ANATOMY','SCIENCE OF DENTAL MATERIALS'],


            }
        },
        mixins: [Mixin],
        mounted(){
        	if(sessionStorage.getItem('loaded')){
            	// alert('loaded');
	        }
	        else{
	            sessionStorage.setItem("loaded", true);
	            $("#modal-loaded").modal('show');
	        }
        	var vm = this;
        	var accessToken = JSON.parse(this.getAccesstoken());
        	if(accessToken){
        		vm.loggedinUserId = accessToken.user.id
	        }
	        $('#doctor_edit').on('shown.bs.modal', function () {
	  			vm.getDoctorInfo(vm.loggedinUserId);
			})

			$('#user_edit').on('shown.bs.modal', function () {
	  			vm.getUserInfo(vm.loggedinUserId);
			})
			vm.getCurrentpostion();
			$('#apply_dental_camp_modal').on('shown.bs.modal', function () {
	  			var user = accessToken.user;
	  			$("#apply_userid").val(user.id);
	  			$("#apply_name").val(user.name);
	  			$("#apply_email").val(user.email);
	  			$("#apply_phone").val(user.phone_number);
			})
    		
        },

        
        methods: {
        	imageUrlAlt(){
                event.target.src = "https://ubl.sensetiveexpert.com/ubl_laravel/public/images/default.jpg"
            },
        	applySave(){
        		axios({	
        				headers: authHeader(),
	    				url: this.getApiUrl()+"applySave",
	                    method: "post",
	                    data: {
	                    	id: $("#apply_userid").val(),
	                    	address: $("#apply_address").val()
	                    },
	            }).then(function (response) {
	            	alert(response.data.message);
	            	if(response.data.success == true){
	            		$('#apply_dental_camp_modal').modal('hide');
	                	$("#apply_address").val("");
	            	}
	                
	            }).catch(function (error) {
	                vm.error = error
	            });
        	},
        	onLogin(googleUser){
        		console.log('google');
        	},
        	onSignIn(googleUser) {
        	// signuptest(){
	            // console.log('google');
	            // var profile = googleUser.getBasicProfile();
	            // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	            // console.log('Name: ' + profile.getName());
	            // console.log('Image URL: ' + profile.getImageUrl());
	            // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

	            axios({	
	    				url: this.getApiUrl()+"signUpGoogle",
	                    method: "post",
	                    // params: query,
	                    data: {
	                    	name: profile.getName(),
	                    	email: profile.getEmail(),
	                    	imagelink: profile.getImageUrl()
	                    },
	            }).then(function (response) {
	            	alert(response.data.message);
	            	if(response.data.success == true){
	            		$('#signupModal').modal('hide');
	                	$("#signup_name").val("");
	                	$("#email").val("");
	                	$("#signup_phone").val("");
	                	$("#password").val("");
	                	$("#con_password").val("");
	                	$("#role_id").val("");
	                	$("#agree").val("");
	            	}
	            	
	                // vm.$router.push('/user/success') 
	                
	            }).catch(function (error) {
	                vm.error = error
	            });
	        },
        	showImage(){
        		var file = $('#file')[0].files[0];
        		$("#previewImage").attr("src",window.URL.createObjectURL(file));
        		$("#clearButton").show();

        	},
        	clearImage(){
        		$("#previewImage").attr("src","https://ubl.sensetiveexpert.com/ubl_laravel/public/images/default.jpg");
        		$("#clearButton").hide();
        	},
        	signUp(){
        		var vm = this;
        		if($("#signup_name").val()==""){
        			alert("Please insert name");
        			return false;
        		}
        		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    			if(!emailReg.test($("#email").val()) || $("#email").val()==""){
        		// if($("#email").val()==""){
        			alert("Please insert a valid email address");
        			return false;

        		}
        		if($("#signup_phone").val()==""){
        			alert("Please insert phone number");
        			return false;
        		}
        		if($("#password").val()==""){
        			alert("Please insert password");
        			return false;
        		}
        		if($("#con_password").val()==""){
        			alert("Please Confirm Password");
        			return false;
        		}
        		if($("#password").val()!= $("#con_password").val()){
        			alert("Password and confirm password do not match");
        			return false;
        		}
        		if($("#role_id").val()==""){
        			alert("Please Select Role");
        			return false;
        		}

        		

        		if($("#role_id").val()==2 && $("#chamber_name_reg").val()==""){
        			alert("Please enter Chamber Name");
        			return false;
        		}


        		if($("#role_id").val()==2 && $("#chamber_address_reg").val()==""){
        			alert("Please enter Chamber Address");
        			return false;
        		}


        		if($("#role_id").val()==2 && $("#bmdc_number_reg").val()==""){
        			alert("Please enter BMDC No.");
        			return false;
        		}


        		if($("#role_id").val()==2 && $("#education_reg").val()==""){
        			alert("Please enter education");
        			return false;
        		}

        		if(!$("#agree").is(':checked')){
        			alert("Please agree to terms and conditions");
        			return false;
        		}

        		if(!$("#privacy").is(':checked')){
        			alert("Please agree to our privacy and policy");
        			return false;
        		}

        		if(!$("#age").is(':checked')){
        			alert("You must be at least 18 years old to register");
        			return false;
        		}
        		

        		if(!$("#location_reg").is(':checked')){
        			vm.location_reg = "";
        		}
        		else{
        			vm.location_reg = vm.currentPosition.latitude+','+vm.currentPosition.longitude;
        		}
        		console.log(vm.currentPosition)
        		alert(vm.location_reg);
        		return false;
        		var formData = new FormData();
            	formData.append('signup_name',$("#signup_name").val());
				formData.append('email',$("#email").val());
				formData.append('signup_phone',$("#signup_phone").val());
				formData.append('password',$("#password").val());
				formData.append('con_password',$("#con_password").val());
				formData.append('role_id',$("#role_id").val());
				formData.append('agree',$("#agree").val());
				formData.append('privacy',$("#privacy").val());
				formData.append('age',$("#age").val());
				formData.append('designation_reg',$("#designation_reg").val());
				formData.append('department_reg',$("#department_reg").val());
				formData.append('specialization_reg',$("#specialization_reg").val());
				formData.append('chamber_name_reg',$("#chamber_name_reg").val());
				formData.append('chamber_address_reg',$("#chamber_address_reg").val());
				formData.append('education_reg',$("#education_reg").val());
				formData.append('bmdc_number_reg',$("#bmdc_number_reg").val());
				formData.append('online_consultation_reg',$("#online_consultation_reg").val());
				formData.append('location_reg',vm.location_reg);
				if($('#file_reg').val()){
					formData.append('image', $('#file_reg')[0].files[0]);
				}
				


        		axios({	
        				url: this.getApiUrl()+"signUp",
                        method: "post",
                        // params: query,
                        data: formData, 
                        // $('#signUpForm').serialize() ,
                }).then(function (response) {
                	alert(response.data.message);
                	if(response.data.success == true){
                		$('#signupModal').modal('hide');
	                	$("#signup_name").val("");
	                	$("#email").val("");
	                	$("#signup_phone").val("");
	                	$("#password").val("");
	                	$("#con_password").val("");
	                	$("#role_id").val("");
	                	$("#agree").val("");
                	}
                	
                    // vm.$router.push('/user/success') 
                    
                }).catch(function (error) {
                    vm.error = error
                });
        	},

        	showDoctorReg(){
        		var role_id = $("#role_id").val();
        		if(role_id==2){
        			$("#doctor_reg_div").show();
        			$("#filediv").show();
        			$("#userdiv").css("margin-bottom", "15px");
        		}
        		else{
        			$("#doctor_reg_div").hide();
        			$("#filediv").hide();
        			$("#userdiv").css("margin-bottom", "0px");
        		}
        	},

        	login(){

                var vm = this;
                vm.error = '';
                var request_data = {
                    "email": vm.login_email,
                    "password": vm.login_password,
                };
                if(vm.login_email==""){
                	alert("Please insert email");
                	return false;
                }
                if(vm.login_password == ""){
                	alert("Please insert password");
                	return false;
                }
                if(!$("#login_agree").is(':checked')){
        			alert("Please agree to terms and conditions");
        			return false;
        		}
        		if(!$("#login_privacy").is(':checked')){
        			alert("Please agree to our privacy and policy");
        			return false;
        		}
        		if(!$("#login_age").is(':checked')){
        			alert("You must be at least 18 years old to login");
        			return false;
        		}
                axios({
                        url: this.getApiUrl()+"postlogin",
                        method: "post",
                        data: request_data,
                        
                }).then(function (response) {
                    if(response.data.success){
                    	vm.loggedin = true
	                    localStorage.setItem('accessToken',JSON.stringify(response.data));
	                    window.location.reload();
                    }
                    else{
                    	alert("Please activate your account by checking your email");
                    }
                    
                    // vm.$router.push('/user/dashboard') 
                }).catch(function (error) {
                    if(error.response.data.success == false){
                    	// alert("Email and password do not match");
                    	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		    			if(!emailReg.test(vm.login_email) || vm.login_email==""){
		        		// if($("#email").val()==""){
		        			alert("BMDC No. and password do not match");
		        			// return false;

		        		}
		        		else{
		        			alert("Email and password do not match");
		        		}
                    }
                });
            },

            updatePlaceholder(){
            	if($("#reg_type").val()=="Doctor"){
            		$("#reg_info").attr("placeholder", "BMDC Number");
            	}
            	else if($("#reg_type").val()=="Company"){
            		$("#reg_info").attr("placeholder", "Company Address");
            	}
            	else if($("#reg_type").val()=="School"){
            		$("#reg_info").attr("placeholder", "School Address");
            	}
            	else if($("#reg_type").val()=="College"){
            		$("#reg_info").attr("placeholder", "College Address");
            	}
            	else if($("#reg_type").val()=="University"){
            		$("#reg_info").attr("placeholder", "University Address");
            	}

            	if($("#reg_type").val()==""){
            		$("#reg_info").css("display", "none");
            	}
            	else if($("#reg_type").val()!=""){
            		$("#reg_info").css("display", "block");
            	}

            },

            regDentalCamp(){
            	var vm = this;
            	if(vm.reg_name==""){
            		alert("Please insert name");
            		return false;
            	}
            	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    			if(!emailReg.test(vm.reg_email) || vm.reg_email==""){
        		// if($("#email").val()==""){
        			alert("Please insert a valid email address");
        			return false;

        		}
            	if(vm.reg_phone==""){
            		alert("Please insert phone number");
            		return false;
            	}
            	if(vm.reg_type==""){
            		alert("Please Select type");
            		return false;
            	}
            	if(vm.reg_info==""){
            		alert("Please update field");
            		return false;
            	}
            	if(!$("#reg_agree").is(':checked')){
        			alert("Please agree to terms and conditions");
        			return false;
        		}
            	axios({
                        url: this.getApiUrl()+"regDentalCamp",
                        method: "post",
                        data: $('#reg_dental_camp_form').serialize() ,
                }).then(function (response) {
                    alert(response.data.message);
                    vm.reg_name = "";
                    vm.reg_email = "";
                    vm.reg_phone = "";
                    vm.reg_type = "";
                    vm.reg_info = "";
                    $('#reg_dental_camp_modal').modal('hide');
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },

            getDoctorInfo(id){
            	var vm = this;
            	axios({
                        // headers: authHeader(),
                        url: this.getApiUrl()+"getDoctorInfo",
                        method: "GET",
                        params: {
                        	id : id,
                        	login: true
                        },
                        // data: form_data,
                }).then(function (response) {
                	vm.doctor_name= response.data[0].name;
                	vm.doctor_email= response.data[0].email;

                	vm.doctor_designation= response.data[0].designation;
                	vm.doctor_institution= response.data[0].organization;
                	vm.bmdc_number= response.data[0].bmdc_number;
                	vm.specialization= response.data[0].specialization;
                	// vm.doctor_email= response.data[0].email;
                	
                	vm.doctor_chamber_name= response.data[0].chamber_name;
                	vm.doctor_chamber_address= response.data[0].chamber_address;
                	vm.doctor_education= response.data[0].education;
                	if(response.data[0].department == "" || response.data[0].department == null){
                		vm.department= "";
                	}
                	else{
                		vm.department= response.data[0].department;
                	}

                	vm.doctor_phone= response.data[0].phone_number;
                	$("#doctor_id").val(response.data[0].user_id);
                	$("#previewImage").attr("src","https://ubl.sensetiveexpert.com/ubl_laravel/public/images/doctor/"+response.data[0].bmdc_number+".jpg");
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },

            getUserInfo(id){
            	var vm = this;
            	axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"getUserInfo",
                        method: "GET",
                        params: {
                        	id : id
                        },
                        // data: form_data,
                }).then(function (response) {
                	vm.user_name= response.data[0].name;
                	vm.user_email= response.data[0].email;
                	vm.user_phone= response.data[0].phone_number;
                	$("#user_id").val(response.data[0].id)
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },


            updateDoctor(){
            	var vm = this;
            	var formData = new FormData();
            	// console.log($('#doctor_edit_form').serialize());
            	formData.append('doctor_id',$("#doctor_id").val());
            	formData.append('doctor_name',vm.doctor_name);
            	formData.append('doctor_email', vm.doctor_email);
            	formData.append('doctor_designation', vm.doctor_designation);
            	// formData.append('doctor_institution', vm.doctor_institution);
            	formData.append('bmdc_number', vm.bmdc_number);
            	formData.append('specialization', vm.specialization);
            	formData.append('doctor_chamber_name', vm.doctor_chamber_name);
            	formData.append('doctor_chamber_address', vm.doctor_chamber_address);
            	formData.append('doctor_education', vm.doctor_education);
            	formData.append('doctor_phone', vm.doctor_phone);
            	formData.append('department', vm.department);
            	// formData.append('designation', 'designation');
				formData.append('image', $('input[type=file]')[0].files[0]); 
            	axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"updateDoctor",
                        method: "post",
                        data: formData ,
                }).then(function (response) {
                	$('#doctor_edit').modal('hide');
                    alert(response.data.message);
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },

            updateUser(){
            	var vm = this;
            	axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"updateUser",
                        method: "post",
                        data: $('#user_edit_form').serialize() ,
                }).then(function (response) {
                	$('#user_edit').modal('hide');
                    alert(response.data.message);
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },

            updatePassword(){
            	var vm = this;
            	$("#pass_id").val(vm.loggedinUserId);
            	if(vm.new_pass != vm.con_new_pass){
            		alert("New password do not match");
            		return false;
            	}
            	axios({
                        headers: authHeader(),
                        url: this.getApiUrl()+"updatePassword",
                        method: "post",
                        data: $('#change_pass_form').serialize() ,
                }).then(function (response) {
                	if(response.data.success){
                		$('#change_pass').modal('hide');
	                	vm.current_pass = "";
	                	vm.new_pass = "";
	                	vm.con_new_pass = "";
                	}
                	alert(response.data.message);
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },

            showPassword(id){
            	var type = $("#"+id).attr('type');
            	if(type=="text"){
            		$('#'+id).get(0).type = 'password';
            	}
            	else{
            		$('#'+id).get(0).type = 'text';
            	}
            },

            showForgetPass(){
            	$("#loginModal").modal('hide');
            	$("#forget-modal").modal('show');
            },

            sendmail(){
            	var vm = this;
            	if($("#forget_email").val()==""){
            		alert("Please write your email address");
            		return false;
            	}

            	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    			if(!emailReg.test($("#forget_email").val()) || $("#forget_email").val()==""){
        		// if($("#email").val()==""){
        			alert("Please insert a valid email address");
        			return false;

        		}

            	axios({
                        url: this.getApiUrl()+"sendmail",
                        method: "GET",
                        params: {
                        	email : $('#forget_email').val()  
                        },
                }).then(function (response) {
                	alert(response.data.message);
                	if(response.data.success){
                		$("#forget-modal").modal('hide');
                		$('#forget_email').val('')
                	}
                	
                    
                }).catch(function (error) {
                    vm.error = error
                });
            },
        }
    }
</script>

<style>
  
</style>
