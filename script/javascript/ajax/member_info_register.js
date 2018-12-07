$(document).ready(function(){
	$('#register_form').submit(function(event){
		$('#register_loading').fadeIn(150);
		$('#com_name + .throw_error').empty();
		$('#success').empty();
		$season_value = "";

		function season_result(){
            if($("#six_m").is(":checked")){
            	$season_value = 6;
                return $season_value;
            }else if($("#one_y").is(":checked")){
				$season_value = 12;
                return $season_value;
            }else{
                return $season_value;
            }
		}
		
		var postForm = {
			'm_season': season_result(),
			'name' : $('input[name=com_name]').val(),
			'user' : $('input[name=com_user]').val(),
			'addr' : $('textarea[name=com_addr]').val(),
			'email' : $('input[name=com_email]').val(),
			'phone' : $('input[name=com_phone]').val(),
			'pass' : $('input[name=pass]').val(),
			'confirm_pass' : $('input[name=confirm_pass]').val()
		};
		
		$.ajax({
			type : 'POST',
			url : 'backend/register_check.php',
			data : postForm,
			dataType : 'json',
			timeout: 15000,
            error:function () {
            alert("Some Error Occurred");
            $('#register_loading').fadeOut(100);
        	},
			success : function(data){
				if(!data.success){
					if(data.errors.error_empty){
                        $('#register_loading').fadeOut(100);
						$('.throw_error').fadeIn(100).html(data.errors.error_empty);
						$('.throw_error').shake();
					}
				}else{
                    $('#register_loading').fadeOut(100);
					$('#success').fadeIn(1000).append('<p style="background: #333333; color:#ffffff;font-size: 2em;">'+data.posted+'</p>');
					$('#register_wrapper').fadeOut(100);
					$('#success').fadeIn(100);
					$('#success').fadeOut(1000);
					$('#login_wrapper').fadeIn(1000);
				}
			}

		});
		
		event.preventDefault();
	});
});