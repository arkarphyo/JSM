$(document).ready(function(){
    $(document).ready(function(event){

        $break = "\n";
        var space___ = '&emsp;';
        var url = 'backend/jobpost_card_connect.php';

        function positionLength(str){
            var returnStr = '';
            var device_width = (window.innerWidth > 800) ? window.innerWidth : screen.width;
            if(device_width > 800){
                if(str.split('').length > 30){
                    returnStr = str.substring(0, 30)+space___+"...";
                }else{
                    returnStr = str;
                }
            }else{
                if(str.split('').length > 20){
                    returnStr = str.substring(0, 26)+"...";
                }else{
                    returnStr = str;
                }
            }

            return returnStr;
        }

        $.getJSON(url, function(data){
           $.each(data, function(index, data){
            
               $('#grid_layout').append('<div id="jobpost_layout">'
                                                +'<div id="job_title">'
                                                    +'<span id="jobpost_position"><i class="fa fa-suitcase"></i>'
                                                        +space___
                                                        +data.position+' '+'<i style="font-size:0.8em;">('+positionLength(data.name)+')</i>'
                                                    +'</span>'
                                                +'</div>'
                                                +'<div id="jobpost_photo_layout">'

                                                    +'<span id="jobpost_com_name"> '
                                                    +data.com_name
                                                    + '</span>'

                                                +'<img src="'+data.photo+'" alt="Image" id="jobpost_photo" width="100%" height="100px;"/>'
                                                +'</div>'
                                                +'<div id="jobpost_detail_layout">'
                                                    +'<span id="jobpost_salary"><i class="fa fa-usd"></i>'
                                                    +space___
                                                    +data.salary
                                                    + '<i></i></span>'
                                                    +'<span id="jobpost_location"><i class="fa fa-location-arrow"></i>'
                                                    +space___
                                                    +data.location
                                                    +'</span>'
                                                    +'<span id="jobpost_work_type"><i class="fa fa-clock-o"></i"></i>'
                                                    +space___
                                                    +data.work_type
                                                    +'</span>'
                                                    +'<span id="jobpost_no_post"><i class="fa fa-users"></i"></i>'
                                                    +space___
                                                    +data.no_post
                                                    +'<i>  Posts</i></span>'
                                                    +'<span id="jobpost_job_des"><i class="fa fa-info"></i> Job Description'
                                                    +'</br><p id="jobpost_job_detail">'+space___+data.job_des.substring(0, 100)+'.......</p>'
                                                    +'</br>'
                                                    +'<span id="jobpost_readmore_btn"><i class="fa fa-subbmit"></i>View</span>'
                                                    +'<i id="jobpost_time_ago">'+data.ago+'</i>'
                                                    +'</span>'
                                                    +'</div>');
           }) ;
        });
    });

    $(document).ready(function(event){

        $("#jobpost_job_detail").text(function(index, currentText) {
         return currentText.substr(0, 25);
        });
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