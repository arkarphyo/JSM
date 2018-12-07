$(document).ready(function(){
    $(document).ready(function(event){
        $.ajaxSetup({cache:false});
        var url = 'backend/jobpost_card_connect.php';
        $.getJSON(url, function(data){
           $.each(data, function(index, data){
            
               $('#field_jobs').append('<div class="swiper-slide">'
                                            +'<div class="img">'
                                            +'<span class="title">'
                                            +data.position
                                            +'</span>'
                                            +'<img class="active_field_img" src="'
                                                +data.photo
                                                +'" alt="User-Profile-Image"/>'
                                            +'</div>'
                                        +'</div>');
               com_swiper_update();
           });
        });
    });
    return false;
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