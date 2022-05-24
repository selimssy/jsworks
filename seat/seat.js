// 자리 배치도

// let customNum = Number(prompt("입장객은 몇 명인가요?"));   // 고객 수
let customNum = 32;

// let colNum = Number(prompt("한 줄에 몇 명씩 앉나요?"));         // 열 수
let colNum = 5;

let rowNum = 0;          // 행 수

// 입장객 수에 따른 행과 열 계산

// 나누어 떨어질 때와 떨어지지 않을 때를 구분해줘야!!
if(customNum % colNum == 0){
    rowNum = customNum / colNum;
} 
else{
    rowNum = parseInt(customNum / colNum) + 1;
}



document.write("<table>")
for(let i = 0; i < rowNum; i++){
    //행
    document.write("<tr>")
    for(let j = 1; j <= colNum; j++){
        let seatNum = i*colNum + j;
        if(seatNum > customNum) break;          // 좌석수가 고객수보다 크면 탈출
        document.write("<td>좌석" + seatNum + "</td>")
    }
    document.write("<tr>")
}
document.write("</table>")



