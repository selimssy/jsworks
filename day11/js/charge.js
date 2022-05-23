// 놀이공원 입장료 계산 프로그램
/* 취학전 아동    1000원
   초등학생     2000원
   중고등학생    2500원
   일반인    3000원  
   */

var age = Number(prompt("나이를 입력하세요 : "));
var charge = 0;
var classify = ""

if(age < 8){
  classify = "취학전 아동" , charge = 1000
}
else if(age < 14){
  classify = "초등학생" , charge = 2000
}
else if(age < 20){
  classify = "중고등학생" , charge = 2500
}
else{
  classify = "일반인", charge = 3000
}

document.write(classify + "입니다.<br>")
document.write("입장료는 <span class='charge'>" + charge + "원</span> 입니다.")
// document.write("입장료는 " + "<span class='charge' >" + charge + "원" + "</span>" +  " 입니다.")






// if(age < 8){
//   document.write("취학전 아동입니다<br>")
//   charge = 1000
// }
// else if(age < 14){
//   document.write("초등학생입니다<br>")
//   charge = 2000
// }
// else if(age < 20){
//   document.write("중고등학생입니다<br>")
//   charge = 2500
// }
// else{
//   document.write("일반인입니다<br>")
//   charge = 3000
// }

// document.write("입장료는 " + charge + "원 입니다.")
