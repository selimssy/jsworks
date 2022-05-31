// 내장 함수
// 인코딩, 디코딩 함수

// 인코딩 :  한글 → 16진수 유니코드
// 디코딩 :  16진수 유니코드 → 한글




//인코딩

let encodeStr = "자바스크립트"
console.log(encodeURIComponent(encodeStr));  
// %EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8  
// 이런식으로 "자바스크립트"를 유니코드로 코드화(한글은 에러가 발생할 수 있으므로)




//디코딩

let decodeStr = encodeURIComponent(encodeStr)
console.log(decodeURIComponent(decodeStr))   // 자바스크립트








// 숫자, 유한무한 값 판별
// isNaN(대입할 것) : 숫자 아니면 true, 숫자면 false

let num1 = "숫자"
if(!isNaN(num1)){             // false(true에 !을 붙였으니까)
    console.log("숫자")
}
else
    console.log("숫자 아님")





// 자바스크립트 코드 변경 함수


console.log(eval("2*30"));   // 60
console.log(eval("2+3"));    // 5
