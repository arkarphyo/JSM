$(document).ready(function(){
	$("body").on('load', function(){
		$("#filter_search").animateCss("Animate bounceIn");
	});


	$(".about_menu").click(function () {
		$("#container").css({"filter":"blur(3px)"});
		$("#about_wrapper").fadeIn("100");
    });

	$("#about_close_btn").click(function () {
		$("#about_wrapper").fadeOut("100");
		$("#container").css({"filter":"blur(0px)"});
    });
	
	$("#login_close_btn").click(function(){
		
		$("#login_wrapper").fadeOut("100");
		$("#container").css({"filter":"blur(0px)"});
		
	});
	
	$("#login_btn").click(function (){
		//$("#container").css({"filter":"blur(3px)"});
		//$("#login_wrapper").fadeIn("100");
		$(location).attr('href', 'login');
	});
		
	
	$("#menu_btn").click(function(){
		$(".home_menu,.service_menu,.about_menu,.contacts_menu").slideToggle("fast",function(){
			$("#menu_container").css({"height":"0px"})
		});
	});
	
	$(".home_menu,.service_menu,.about_menu,.contacts_menu").click(function() {
		$(".home_menu,.service_menu,.about_menu,.contacts_menu").slideToggle("fast", function(){
			$("#menu_container").css({"height":"0px"})
		});
	});

	$("#register_close_btn").click(function(){
		$("#container").css({"filter":"blur(0px)"});
		$("#register_wrapper").fadeOut("100");
	});
	
	//Register Button Click Event Listener

	//$("#register_btn").click(function(){
	//	$("#container").css({"filter":"blur(5px)"});
	//	$("#team_and_condition").fadeIn("100");
	//});

	$("#register_btn").click(function() {
		$("#container").css({"filter": "blur(3px)"});
		$("#first_choose_register_wrapper").fadeIn("100");
	});


	$("#choose_register_close").click(function() {
		$("#container").css({"filter": "blur(0px)"});
		$("#first_choose_register_wrapper").fadeOut(100);
	});

	$("#emp_register_close").click(function() {
		$("#emp_register_form_wrapper").fadeOut("fast");
		$("#container").css({"filter": "blur(0px)"});
	});

	$("#register_for_emp_btn").click(function() {
		$("#first_choose_register_wrapper").fadeOut("fast");
		$("#emp_register_form_wrapper").fadeIn(100);
	});	

	$("#register_for_seeker_btn").click(function() {
		$("#first_choose_register_wrapper").fadeOut("fast");
		$("#team_and_condition").fadeIn(100);
	});
	
	$(".agr_close_btn").click(function(){
		$("#team_and_condition").fadeOut("fast");
		$("#container").css({"filter":"blur(0px)"});
	});
	
	$(".sign_up_btn").click(function(){
		$("#team_and_condition").fadeOut("100");
		$("#register_wrapper").fadeIn("200");
	});
	
	$("#agree_check").click(function(){
		if($("#agree_check").is(":checked")){
			$(".sign_up_btn").fadeIn("100");
		}else{
			$(".sign_up_btn").fadeOut("200");
		}
	});


	$("#six_m").click(function(){
		if($("#one_y").prop("checked",true)){
			$("#one_y").prop("checked",false);
		}
    });

	$("#one_y").click(function () {
		if($("#six_m").prop("checked",true)){
			$("#six_m").prop("checked",false);
		}
    });



if(screen.width > 1000){

    $('#search_form').css({'opacity':'1','position':'absolute'});
    $(window).scroll(function () {

		if ($(document).scrollTop()  > 40){
			$('#sub_title').css({'color':'red','margin-left':'20px','font-size':'2em','transition':'0.5s ease-in-out'});
            $('#menu_container').css({'transition':'0.2s ease-in-out','margin-top':'0px'});
		}else{
            $('#sub_title').css({'color':'#FFF','margin-left':'80px','font-size':'2.5em'});
            $('#menu_container').css({'margin-top':'83px'});
		}
    });

}
	//Home Avater Menu and Logout System--------------------------------------
     	$('.popr').popr();
		$(document).on('click', '#logout_home_btn', function (event) {                
		    var session_logout="";
			var session_data ={};

			$.ajax({
				type : 'POST',
				url : 'backend/session_logout.php',
				data : session_data,
				dataType : 'json',
				timeout: 1500,
	            error : function () {
	            	alert("Connection Problem!");
	        	},
	        	success : function(data){
	        		if(data.success == false){
	        			alert(data.errors.error+'\n'+data.error_msg);
	        		}else{
	        			$(location).attr('href',data.logout_url);
	        		}
	        	}
			});

		});

	//
	//function upload_image_preview(image){
	//	if(image.files && image.files[0]){
	//		var fileReader = new FileReader();
	//		
	//		fileReader.onload = function(e){
	//			$("#upload_thumb").attr('src',e.target.result);
	//		}
	//		
	//		fileReader.readAsDataURL(image.files[0]);
	//	}
	//}
	//
	//
	//	$("#com_logo").change(function(){
	//		upload_image_preview(this);
	//	});
});