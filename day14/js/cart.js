// 장바구니 배열 사용하기

let cart = new Array(5);
// console.log(cart.length + "개");


//입력
cart = ["생수", "라면", "커피", "계란", "쌀"];



// let cart = new Array("생수", "라면", "커피", "계란");
// 이렇게 할 수도 이긴 한데 위에 방식을 더 많이 쓴다




// "커피" 출력
document.write(cart[2]);



document.write("<br>")

// 장바구니 전체 목록 출력
for(i = 0; i < cart.length; i++){
    document.write(cart[i] + " ")
}





{/* <me> */}
cart[5] = "음료";
console.log(cart[5])
console.log(cart.length + "개");
// 5개로 정의해도 더 추가도되넹..





document.write("<br>")

// "계란"을 "사과"로 변경
cart[3] = "사과"

for(i = 0; i < cart.length; i++){
    document.write(cart[i] + " ")
}






document.write("<br>")

// "라면"을 삭제
delete cart[1];
for(i = 0; i < cart.length; i++){
    document.write(cart[i] + " ") 
}                                       // 생수 undefined 커피 사과 쌀 음료






// 객체(object)로 출력(이름 그대로 쓰면 된다)
console.log(cart);        // (6) ['생수', empty, '커피', '사과', '쌀', '음료']