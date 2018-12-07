var objXml;	

function member_info_register(){
var name = document.getElementById("com_name").value;
var regNo = document.getElementById('com_reg_no').value;
var addr = document.getElementById('com_addr').value;
var email = document.getElementById('com_email').value;
var phone = document.getElementById('com_phone').value;
var password = document.getElementById('pass').value;
var re_password = document.getElementById('confirm_pass').value;
	
	
	if(name.length == 0){
		var name_obj = document.getElementById('com_name');
		
		name_obj.placeholder = "Please enter your company's name!";
		name_obj.style.opacity = "0.3";
		name_obj.style.boxShadow = "0px 0px 5px 0.5px rgba(0,0,0,0.5)";
		return;
	}
	if(regNo.length == 0){
		document.getElementById('com_reg_no').value = "Not Match";
		return;
	}
	if(addr.length == 0){
		document.getElementById('com_addr').value = "Not Match";
		return;
	}
	if(email.length == 0){
		document.getElementById('com_email').value = "Not Match";
		return;
	}
	if(phone.length == 0){
		document.getElementById('com_phone').value = "Not Match";
		return;
	}
	if(password.length == 0 && password === re_password){
		document.getElementById('pass').value = "Not Match";
		alert("GOOGD");
		return;
	}
	
	
	
	objXml = GetXmlHttpObject();
	if(objXml == null){
		alert("Browser does not support HTTP Request");
		return;
	}
	
	var url = "backend/register_check.php";
	objXml.onreadystatechange = stateChanged;
	objXml.open("POST",url,true);
	objXml.send(null);
}

function stateChanged(){
	if(objXml.readyState == 4 || objXml.readyState == "complete"){
		document.getElementById("com_name").value = objXml.responText;
	}
}

function GetXmlHttpObject(){
	var objXml = null;
	
	try{
		objXml = new XMLHttpRequest();
	}catch(e){
		try{
			objXml = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			objXml = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return objXml;
}


