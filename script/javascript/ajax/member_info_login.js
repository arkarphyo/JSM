$(document).ready(function(){
	$('#ml_form').submit(function(event){
		$('#login_loading').fadeIn(150);
		$('#login_username + .throw_error').empty();
		$('#success').empty();
		$season_value = "";
		
		var postForm = {
			'user' : $('input[name=login_username]').val(),
			'pass' : $('input[name=login_password]').val()
		};
		
		$.ajax({
			type : 'post',
			url : 'backend/login_check.php',
			data : postForm,
			dataType : 'json',
			timeout: 1500,
            error:function () {
            alert("Some Error Occurred");
            $('#login_loading').fadeOut(100);
        	},
			success : function(data){
				if(data.success == false){
					if(data.errors.error_empty){
                        $('#login_loading').fadeOut(100);
						$('.throw_error').fadeIn(100).html(data.errors.error_empty);
						$('#login_layout').shake();
					}else{
						$('#login_loading').fadeOut(100);
                        $('.throw_error').fadeIn(100).html(data.errors.invalid_member+" On NO!! ");
                        $('#login_layout').shake();
					}
				}else{
                    $('#login_loading').fadeOut(100);
					$('#success').fadeIn(1000).append('<p style="background: #333333; color:#ffffff;font-size: 2em;">'+data.posted+data.login_time+'</p>');
					$('#register_wrapper').fadeOut(100);
					$('#success').fadeIn(100);
					$('#success').fadeOut(1000);
					$('#login_wrapper').fadeOut(100);
                    $("#container").css({'filter':'blur(0px)'});
                    var post_request = {
                        'id' : data.id,
                        'url_redirect' : data.url_redirect
                    };
                   	window.location.href=data.url_redirect;
				}
			}

		});
		
		event.preventDefault();
	});

});