let score = 0
let grade = ""

score = 85

if(score >= 90){
  grade = "A"
}
else if(score >= 80){
  grade = "B"
}
else if(score >= 70){
  grade = "C"
}
else if(score >= 60){
  grade = "D"
}
else{
  grade = "F"
}

document.write("학점은 <span class='grade'>" + grade + "</span>입니다.")