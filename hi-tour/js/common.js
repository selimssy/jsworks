

$(document).ready( function() {

	// let isOver1 = false    // 상위메뉴(마우스오버되면 : true)
	// let isOver2 = false   // 하위메뉴(마우스오버되면 : true)

	let isOver1 = [false, false, false, false]
	let isOver2 = [false, false, false, false]

	// fadeOut() 시간 설정
	function goHide(){
		for(let i=0; i <4; i++){
			if(!isOver1[i] && !isOver2[i])  // 상위와 하위 둘 다 마우스가 닿았을 때만      // 깜빡이는거 없어진다
			$(".gnb_depth2_" + (i+1)).fadeOut("fast")
		}
	}



	for(let i = 1; i <=4; i++){
		$(".openAll" + i).mouseover(function(){
			// 서브메뉴 나타나기(header 너비가 800보다 클 때만
			if(parseInt($("header").css("width")) > 800){   // parseInt 해줘야 인식한다!!
				$(".gnb_depth2_" + i).fadeIn("fast")
				isOver1[i - 1] = true
			}
		}).focus(function(){
			if(parseInt($("header").css("width")) > 800){
				$(".gnb_depth2_" + i).fadeIn("fast")
				isOver1[i - 1] = true
			}
		}).mouseout(function(){
			// $(".gnb_depth2_1").fadeOut("fast")
			setTimeout(goHide, 200)  // 0.5초 뒤에 사라지도록
			isOver1[i - 1] = false
		}).blur(function(){
			setTimeout(goHide, 200)    // mouseover는 mouseout으로, focus는 blur로
			isOver1[i - 1] = false
	
		})
	
	
		// 하위메뉴
		$(".gnb_depth2_" + i).mouseover(function(){
			isOver2[i - 1] = true
		}).focus(function(){
			isOver2[i - 1] = true
		}).mouseout(function(){
			isOver2[i - 1] = false
			setTimeout(goHide, 200)
		}).blur(function(){
			isOver2[i - 1] = false
			setTimeout(goHide, 200)
		})
	}






	// 상단 메뉴 마우스오버, 탭 클릭 코드
	// 상위메뉴
	// $(".openAll1").mouseover(function(){
	// 	// 서브메뉴 나타나기(header 너비가 800보다 클 때만
	// 	if(parseInt($("header").css("width")) > 800){   // parseInt 해줘야 인식한다!!
	// 		$(".gnb_depth2_1").fadeIn("fast")
	// 		isOver1[0] = true
	// 	}
	// }).focus(function(){
	// 	if(parseInt($("header").css("width")) > 800){
	// 		$(".gnb_depth2_1").fadeIn("fast")
	// 		isOver1[0] = true
	// 	}
	// }).mouseout(function(){
	// 	// $(".gnb_depth2_1").fadeOut("fast")
	// 	setTimeout(goHide, 500)  // 0.5초 뒤에 사라지도록
	// 	isOver1[0] = false
	// }).blur(function(){
	// 	setTimeout(goHide, 500)    // mouseover는 mouseout으로, focus는 blur로
	// 	isOver1[0] = false

	// })


	// // 하위메뉴
	// $(".gnb_depth2_1").mouseover(function(){
	// 	isOver2[0] = true
	// }).focus(function(){
	// 	isOver2[0] = true
	// }).mouseout(function(){
	// 	isOver2[0] = false
	// 	setTimeout(goHide, 500)
	// }).blur(function(){
	// 	isOver2[0] = false
	// 	setTimeout(goHide, 500)
	// })





	




	// $(".openAll2").mouseover(function(){
	// 	// 서브메뉴 나타나기(header 너비가 800보다 클 때만
	// 	if(parseInt($("header").css("width")) > 800){
	// 		$(".gnb_depth2_2").fadeIn("fast")
	// 		isOver1[1] = true
	// 	}
	// }).focus(function(){
	// 	if(parseInt($("header").css("width")) > 800){
	// 		$(".gnb_depth2_2").fadeIn("fast")
	// 		isOver1[1] = true
	// 	}
	// }).mouseout(function(){
	// 	// $(".gnb_depth2_2").fadeOut("fast")
	// 	isOver1[1] = false
	// 	setTimeout(goHide, 500)
	// }).blur(function(){
	// 	isOver1[1] = false
	// 	setTimeout(goHide, 500)
	// })


	// $(".gnb_depth2_2").mouseover(function(){
	// 	isOver2[1] = true
	// }).focus(function(){
	// 	isOver2[1] = true
	// }).mouseout(function(){
	// 	isOver2[1] = false
	// 	setTimeout(goHide, 500)
	// }).blur(function(){
	// 	isOver2[1] = false
	// 	setTimeout(goHide, 500)
	// })





	// $(".openAll3").mouseover(function(){
	// 	// 서브메뉴 나타나기(header 너비가 800보다 클 때만
	// 	if(parseInt($("header").css("width")) > 800){
	// 		$(".gnb_depth2_3").fadeIn("fast")
	// 		isOver1[2] = true
	// 	}
	// }).focus(function(){
	// 	if(parseInt($("header").css("width")) > 800){
	// 		$(".gnb_depth2_3").fadeIn("fast")
	// 		isOver1[2] = true
	// 	}
	// }).mouseout(function(){
	// 	// $(".gnb_depth2_3").fadeOut("fast")
	// 	isOver1[2] = false
	// 	setTimeout(goHide, 500)
	// }).blur(function(){
	// 	isOver1[2] = false
	// 	setTimeout(goHide, 500)
	// })

	// $(".gnb_depth2_3").mouseover(function(){
	// 	isOver2[2] = true
	// }).focus(function(){
	// 	isOver2[2] = true
	// }).mouseout(function(){
	// 	isOver2[2] = false
	// 	setTimeout(goHide, 500)
	// }).blur(function(){
	// 	isOver2[2] = false
	// 	setTimeout(goHide, 500)
	// })




	// $(".openAll4").mouseover(function(){
	// 	// 서브메뉴 나타나기(header 너비가 800보다 클 때만
	// 	if(parseInt($("header").css("width")) > 800){
	// 		$(".gnb_depth2_4").fadeIn("fast")
	// 		isOver1[3] = true
	// 	}
	// }).focus(function(){
	// 	if(parseInt($("header").css("width")) > 800){
	// 		$(".gnb_depth2_4").fadeIn("fast")
	// 		isOver1[3] = true
	// 	}
	// }).mouseout(function(){
	// 	// $(".gnb_depth2_4").fadeOut("fast")
	// 	isOver1[3] = false
	// 	setTimeout(goHide, 500)
	// }).blur(function(){
	// 	isOver1[3] = false
	// 	setTimeout(goHide, 500)
	// })

	// $(".gnb_depth2_4").mouseover(function(){
	// 	isOver2[3] = true
	// }).focus(function(){
	// 	isOver2[3] = true
	// }).mouseout(function(){
	// 	isOver2[3] = false
	// 	setTimeout(goHide, 500)
	// }).blur(function(){
	// 	isOver2[3] = false
	// 	setTimeout(goHide, 500)
	// })






	// for(let i = 1; i <= 4; i++){
	// 	$(".openAll" + i).mouseover(function(){
	// 		// 서브메뉴 나타나기(header 너비가 800보다 클 때만
	// 		if(parseInt($("header").css("width")) > 800){
	// 			$(".gnb_depth2_" + i).fadeIn("fast")
	// 			isOver1 = true
	// 		}
	// 	}).focus(function(){
	// 		if(parseInt($("header").css("width")) > 800){
	// 			$(".gnb_depth2_" + i).fadeIn("fast")
	// 			isOver1 = true
	// 		}
	// 	}).mouseout(function(){
	// 		// $(".gnb_depth2_4").fadeOut("fast")
	// 		isOver1 = false
	// 		setTimeout(goHide, 500)
	// 	}).blur(function(){
	// 		isOver1 = false
	// 		setTimeout(goHide, 500)
	// 	})
	
	// 	$(".gnb_depth2_" + i).mouseover(function(){
	// 		isOver2 = true
	// 	}).focus(function(){
	// 		isOver2 = true
	// 	}).mouseout(function(){
	// 		isOver2 = false
	// 		setTimeout(goHide, 500)
	// 	}).blur(function(){
	// 		isOver2 = false
	// 		setTimeout(goHide, 500)
	// 	})
	
	// }



	


	


	// top을 클릭하면 header로 이동(라이브러리)
	$('a.s_point').smoothScroll();   // 이 줄은 없어도 작동된다

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	// if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	// else $('.to_top').removeClass('hide');     // 이거 없어도 되는 것 같다
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
	});

	
    
	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){
		$('header').addClass('on');
		$('header .header_cont').slideDown('fast');
		$('header .header_area .header_cont .closePop').show();			
		// $("body").bind('touchmove', function(e){e.preventDefault()});   // 이제는 그냥 onclick으로 해도 된다 
	});
	$('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
        // $("body").unbind('touchmove');
	});
	
});


$(document).ready(function(){
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    $(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
    }); 
    
    // 프로그램 소개 - 더보기/접기 작동
	$('.program_list li .btn_more a').click(function(){
		if ($(this).parent().parent().find('.subtxt').css('display') == 'none') {
			$(this).parent().parent().find('.subtxt').css('display','inline');
			$(this).text('접기');
		} else {
			$(this).parent().parent().find('.subtxt').css('display','none');
			$(this).text('더보기');
		}
	});
   
});
