$(document).ready(function(){
    $(document).ready(function(event){

        $break = "\n";
        var url = 'backend/emp_card_connect.php';

        $.getJSON(url, function(data){
           $.each(data, function(index, data){
               $('#grid_layout').append('<div id="job_layout">'
                                                +'<div id="job_title">'
                                                    +'<span id="position_respon">'+data.position+'</span>'
                                                +'</div>'
                                                +'<div id="employer_photo_layout">'
                   +'<img src="'+data.photo+'" alt="Image" id="employer_photo" width="99%" height="150px;"/>'
                                                +'</div>'
                                                +'<div id="detail_layout">'
                                                    +'<span id="age_respon">'+data.age+'</span>'

                                                    +'<a href="#" id="detail_btn">Detail>></a>'
                                                    +'</div>');
           }) ;
        });
    });

    $(document).ready(function(event){

        var client_ip_function_url = 'class/client_ip_function.php';
        $.getJSON(client_ip_function_url,function(data){
            $.each(data, function(index, data){
                
            });
        });
    });




});

/*

        var postEmpData={
            'data':''
        };
        $.ajax({
           type:'GET',
            url:'backend/emp_card_connect.php',
            dataType:'json',
            timeout:1500,
            error:function (e) {
                alert("Some Error Occurred!"+"\n"+e.message);
            },
            success:function (data) {
                if(!data.success){
                   alert(data.errors.error);
                }else{
                    alert(data);
                }
            }
        });
        */