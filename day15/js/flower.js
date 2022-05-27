
// 텍스트는 보이게, 보기 버튼은 안보이게
function showtext(){
    
    let text = document.getElementById("detail")
    text.style.display = "block";

    let button = document.getElementById("show")
    button.style.display = "none"
    // document.getElementById("show").style.visibility = "hidden"
}




    // 텍스트는 안보이게, 보기 버튼은 보이게
function hideText(){

    let text = document.getElementById("detail")
    text.style.display = "none";

    let button = document.getElementById("show")
    button.style.display = "block"
    // document.getElementById("show").style.visibility = "block"
}