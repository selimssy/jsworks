let score = Number(prompt("점수를 입력하세요"));
let grade = "" ;   // 문자형 변수 초기화

score = 85;

if(score >= 90){
  grade = "A";
}
else if(score >= 80){
  grade = "B";
}
else if(score >= 70){
  grade = "C";
}
else if(score >= 60){
  grade = "D";
}
else{
  grade = "F";
}

document.write("학점은 <span class='grade'>" + grade + "</span>입니다.");




// let score = Number(prompt("점수를 입력하세요"))
// let grade = ""    // 문자형 변수 초기화

// if(score >= 90) grade = "A"
// else if(score >= 80) grade = "B"
// else if(score >= 70) grade = "C"
// else if(score >= 60) grade = "D"
// else grade = "F"

// document.write("학점은 <span class='grade'>" + grade + "</span>입니다.")