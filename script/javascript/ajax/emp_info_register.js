$(document).ready(function(){
	function reformat(){
		$('.emp_register_firstname').focus(function(event) {
			$(this).css({'box-shadow': '0px 1px 0px 1px rgba(0,0,0,0.5)'});
		});
		$('.emp_register_lastname').focus(function(event) {
			$(this).css({'box-shadow': '0px 1px 0px 1px rgba(0,0,0,0.5)'});
		});
		$('.emp_register_email').focus(function(event) {
			$(this).css({'box-shadow': '0px 1px 0px 1px rgba(0,0,0,0.5)'});
		});
		$('.emp_register_phone_number').focus(function(event) {
			$(this).css({'box-shadow': '0px 1px 0px 1px rgba(0,0,0,0.5)'});
		});
		$('.emp_register_password').focus(function(event) {
			$(this).css({'box-shadow': '0px 1px 0px 1px rgba(0,0,0,0.5)'});
		});
		$('.emp_register_confirm_password').focus(function(event) {
			$(this).css({'box-shadow': '0px 1px 0px 1px rgba(0,0,0,0.5)'});
		});
	};

	function resetForm($hash){
		$('#emp_register_close').click(function(event) {
			$($hash).focus(function(event) {
			$(this).css({'box-shadow': '0px 1px 0px 1px rgba(0,0,0,0.5)'});
				});
			$($hash).val('');
			$($hash).attr({
				'placeholder': 'placeholder Again'
			});
		});
	};

	resetForm('.emp_register_firstname .emp_register_lastname .emp_register_email .emp_register_phone_number .emp_register_password .emp_register_confirm_password');
	reformat();

	$('#emp_register_btn').click( function(event) {	
		$('#loading').css({
			'display': 'block'
		});	

		var postForm = {
			'firstname':$('.emp_register_firstname').val(),
			'lastname' :$('.emp_register_lastname').val(),
			'email'	   :$('.emp_register_email').val(),
			'phone'	   :$('.emp_register_phone_number').val(),
			'password' :$('.emp_register_password').val(),
			'confirm_password':$('.emp_register_confirm_password').val()
		};
		$.ajax({
			url: 'backend/back_ajax/emp_register_check.php',
			type: 'POST',
			dataType: 'json',
			data: postForm,
			timeout: 1500,
			error: function(){
				alert('Some Error Occurred!');
				$('#loading').css({
					'display': 'none'
				});
			},
			success: function(data){
				if(!data.success){
					switch (data.errors.type_error) {
						case 'firstname':
							$('.emp_register_firstname').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('.emp_register_firstname').shake('fast');
							$('#emp_register_error').html(" First Name Empty !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							break;
						case 'lastname':
							$('.emp_register_lastname').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('.emp_register_lastname').shake();
							$('#emp_register_error').html(" Last Name Empty !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							break;
						case 'email':
							$('.emp_register_email').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('.emp_register_email').shake();
							$('#emp_register_error').html(" Email Address Empty !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							break;
						case 'phone':
							$('.emp_register_phone_number').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('.emp_register_phone_number').shake();
							$('#emp_register_error').html(" Phone Number Empty !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							break;
						case 'password':
							$('.emp_register_password').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('#emp_register_error').html(" Password Empty !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							$('.emp_register_password').shake();
							break;
						case 'confirm_password':
							$('.emp_register_confirm_password').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('.emp_register_confirm_password').shake();
							$('#emp_register_error').html("Confirm Password Empty !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							break;
						case 'password_not_match':
							$('.emp_register_confirm_password').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('.emp_register_confirm_password').shake();
							$('#emp_register_error').html(" Password not match with confirm password !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							break;
						case 'email_not_match':
							$('.emp_register_email').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('.emp_register_email').shake();
							$('#emp_register_error').html(" Email unvaliadate !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							break;
						case 'phone_not_match':
							$('.emp_register_phone_number').css({
								'box-shadow': '0px 0px 2px 2px rgba(225,8,2,0.8)'
							});
							$('.emp_register_phone_number').shake();
							$('#emp_register_error').html("Phone Number is only number, it's not Empty !");
							$('#emp_register_error').css({
								'display': 'block'
							});
							break;
						default:
							// statements_def
							break;
					}
					$('#loading').css({
						'display': 'none'
					});
				}else{
					alert(data.result);
					$('#loading').css({
						'display': 'none'
					});
				}
			}
		});
		event.preventDefault();
	});
});