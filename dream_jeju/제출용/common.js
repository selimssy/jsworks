$(document).ready(function(){
    // 스크롤하여 내려오면 top버튼이 보이도록
    if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
    else $('.to_top').removeClass('hide');     // 생략해도 되긴 하다
    $(window).scroll( function() {
        if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
        else $('.to_top').removeClass('hide');
    });




    //모바일 메뉴 띄움
    // $('.menubar').click(function(){
    //     $('header').addClass('on');
    //     $('header .header_cont').slideDown('fast');
    //     $('header .header_area .header_cont .closePop').show();			
    //     // $("body").bind('touchmove', function(e){e.preventDefault()});   // 이제는 그냥 onclick으로 해도 된다 
    // });
    // $('header .header_cont .closePop').click(function(){
    //     $('.header_cont').slideUp('fast');
    //     $('header').removeClass('on');
    //     // $("body").unbind('touchmove');
    // });



    //모바일 메뉴 띄움
    $('.menubar').click(function(){
        if(parseInt($("header").css("width")) <= 800){
            $('header').addClass('on');
            $('#topMenu2').fadeIn("fast");
            $('.closePop').show();	
        }   		 
    });


    $('.closePop').click(function(){
        if(parseInt($("header").css("width")) <= 800){
            $('#topMenu2').slideUp('fast');
            $('header').removeClass('on'); 
            $('.closePop').hide();	
        }   
    });


    if(parseInt($("header").css("width")) > 800){
        $('nav').show()
    }


})
