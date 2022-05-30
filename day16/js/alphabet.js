// 대문자 26자를 배열에 저장

//배열에 26개의 공간을 생성
let alphabet = new Array(26);
let ch = "A";   
ch = ch.charCodeAt(0)  // A의 코드값은 65

console.log(ch)   // 65



for(let i = 0; i < alphabet.length; i++){
    alphabet[i] = ch;     // 0번 인덱스에 65가 저장됨
    ch++
}
// 65, 66, 67........90




// 출력
for(let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i] + ", " +
        String.fromCharCode(alphabet[i]))
}