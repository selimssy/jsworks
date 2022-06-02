// 일정 시간 간격으로 이미지 바꾸기
window.onload = function(){
    let picture = ["images/coffee-blue.jpg", "images/coffee-gray.jpg", "images/coffee-pink.jpg"];

    let picIdx = 0;

    showSlide();

    function showSlide(){
        let img = document.getElementById("pic");
        img.src = picture[picIdx];
        picIdx++;

        if(picIdx == picture.length){
            picIdx = 0;
        }

        setTimeout(showSlide, 2000);     // 콜백 함수,  함수 소환할 때 괄호X
    }

}