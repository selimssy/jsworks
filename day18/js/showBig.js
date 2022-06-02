// 큰 이미지 : querySelector("#cup")
// 작은 이미지 : querySelectorAll(".small")



// 큰 사진 선택
let bigPic = document.querySelector("#cup")

// 작은 사진들 선택
let smallPics = document.querySelectorAll(".small")

console.log(smallPics[0])   // querySelectorAll 반환값은 NodeList인데 이렇게 쓸 수 있나보다

//onclick 이벤트
for(let i = 0; i < smallPics.length; i++){
    smallPics[i].onclick = showBig;
    // smallPics[i].addEventListener("click", showBig)   // 이렇게해도 된다
}

function showBig(){
    let newPic = this.src  // 이벤트가 일어난 대상의 속성값
    // src : 이미지의 경로
    bigPic.setAttribute("src", newPic)
}
