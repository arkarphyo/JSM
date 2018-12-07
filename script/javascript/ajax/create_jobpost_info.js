$(document).ready(function() {
	$('#public_jobpost_btn').click(function(event) {
		$('.theme-loader').css({
			opacity : 2,
			background : 'rgba(0,0,0,0.5)'
		});
		$('.theme-loader').fadeIn(300);/* Act on the event */

		$default_value = null;

		function expire(){
			return Date.now()*2;
		};

		function start_time(){
			return Date.now();
		};

		function timestamp(){
			return new Date($.now());
		};

		function com_name(){

			$com_name = $('#avater_name').text();

			return $com_name;
		};

		function reset_form(){
			$('#create_jobpost_name').val('');
					$('#create_jobpost_position').val('0');
					$('#create_jobpost_gender').val('0');
					$('#create_jobpost_salary').val('0');
					$('#create_jobpost_salary_type').val('0');
					$('#create_jobpost_exp_level').val('0');
					$('#create_jobpost_edu_quality').val('0');
					$('#create_jobpost_work_type').val('0');
					$('#create_jobpost_age').val('0');
					$('#create_jobpost_location').val('0');
					$('#create_jobpost_job_policy').val('');
					$('#create_jobpost_no_post').val('');
					$('#create_jobpost_job_des').val('');
					$('#create_jobpost_job_policy').val('');
				};


		var postForm = {
			'name': $('#create_jobpost_name').val(),
			'position': $('#create_jobpost_position option:selected').val(),
			'gender': $('#create_jobpost_gender option:selected').val(),
			'salary': $('#create_jobpost_salary option:selected').val(),
			'salary_type': $('#create_jobpost_salary_type option:selected').val(),
			'exp_level': $('#create_jobpost_exp_level option:selected').val(),
			'edu_quality': $('#create_jobpost_edu_quality option:selected').val(),
			'age': $('#create_jobpost_age option:selected').val(),
			'location': $('#create_jobpost_location option:selected').val(),
			'work_type': $('#create_jobpost_work_type option:selected').val(),
			'no_post': $('#create_jobpost_no_post').val(),
			'job_des': $('#create_jobpost_job_des').val(),
			'job_policy': $('#create_jobpost_job_policy').val(),
			'expire': expire(),
			'start_time': start_time(),
			'timestamp': timestamp(),
			'com_name': com_name()
		};
//		alert($('#create_jobpost_gender option:selected').val());

		$.ajax({
			url: 'backend/create_jobpost.php',
			type: 'POST',
			dataType: 'json',
			data: postForm,
			timeout: 15000,
			error: function(){
				alert("Create Jobpost Error!");
				$('.theme-loader').fadeOut(200);
			},
			success : function(data){
				if(!data.success){
					alert(data.errors.error_empty);
					alert(timestamp());
					$('.theme-loader').fadeOut(200);
				}else{
					alert(timestamp());
					reset_form();	
					$('.theme-loader').fadeOut(200);
				}
			}
		});

		event.preventDefault();
	});

});