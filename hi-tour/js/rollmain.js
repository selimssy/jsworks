// 이미지 슬라이드 구현
let  num = 0   // 이미지 번호
let slidingAuto = null;   // 슬라이드 기능 작동시키는데 사용할 객체




// 슬라이드 3초 간격으로 작동
slidingAuto = setTimeout("play('right')", 2000)    // 매개변수 있으면 따음표 해야!!

function play(direct){   // 방향 매개 변수 설정
	if(direct = "right"){
		num++
		if(num > 2)
			num = 0
	}
	else if(direct = "left"){
		num--
		if(num < 0)
			num = 2
	}
	// else{
	// 	num = direct      // 이게 뭔소리지    // 필요 없을 것 같다
	// }



	// 각각의 버튼이 on - > off로 전체적으로 순환
	$(".rollingbtn").find("li.seq a").each(function(){
		$(".rollingbtn li.seq a img").attr("src", $(".rollingbtn li.seq a img").attr("src").replace("_on.png", "_off.png"))   // "_on.png"에서 "_off.png"로 교체
	})

	

	// 하나의 버튼이 on -> off로 변경
	$(".rollingbtn li.butt" + num + " a img").attr("src", $(".rollingbtn li.butt" + num + " a img").attr("src").replace("_off.png", "_on.png"))




	if(num == 0){
		$(".viewImgList li.imglist1").animate({"opacity" : 0}, 1000)
		$(".viewImgList li.imglist2").animate({"opacity" : 0}, 1000)
		$(".viewImgList li.imglist0").animate({"opacity" : 1}, 1000)   // 0번 이미지만 보이고 나머지는 불투명해서 안보이도록		
	}
	else if(num == 1){
		$(".viewImgList li.imglist2").animate({"opacity" : 0}, 1000)
		$(".viewImgList li.imglist0").animate({"opacity" : 0}, 1000)
		$(".viewImgList li.imglist1").animate({"opacity" : 1}, 1000)   	
	}
	else if(num == 2){
		$(".viewImgList li.imglist0").animate({"opacity" : 0}, 1000)
		$(".viewImgList li.imglist1").animate({"opacity" : 0}, 1000)
		$(".viewImgList li.imglist2").animate({"opacity" : 1}, 1000)  		
	}

	
	slidingAuto = setTimeout("play('right')", 2000)     // 콜백함수 해줘야 계속 돌아간다
													    // 변수에 넣어줘야 뒤에서 slidingAuto를 clearTimeout 할 수 있다
	

	
}




// 재생과 일시정지 구현
$(function(){
	// 정지버튼 클릭하는 순간 정지 버튼은 사라지고 재생버튼 보이도록
	$(".rollstop a").click(function(){		
		$(this).parent().hide()    
		$(".rollplay").css("display", "inline-block")
		if(slidingAuto)   // slidingAuto가 존재하면(작동하고 있으면)
			clearTimeout(slidingAuto)    // 정지
	})
	// 재생버튼 클릭하는 순간 재생 버튼은 사라지고 정지버튼 보이도록
	$(".rollplay a").click(function(){
		$(this).parent().hide()    
		$(".rollstop").css("display", "inline-block")
		play("right")
	})
})