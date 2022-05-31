// let member = Number(prompt("전체 응모자수"));    // 응모자 수
let member = 7;   
let winners = new Array(5); 








if(member == null){
    document.write("<p>입력이 취소되었습니다.</p>")
}
else{

    document.write("<p>전체 응모자수 : " + member + "명</p>")
    document.write("<p>당첨자 : ")

    //  5명 추첨

    for(let i = 0; i < winners.length; i++){
        let pickedOne = Math.floor(Math.random() * member + 1)
        // 여기 넣어야 반복적으로 랜덤으로 뽑는다ㅠ
        winners[i] = pickedOne;
        
        for(let j = 0; j < i; j++){
            if(winners[j] == winners[i])      // 이전 인덱스와 값이 같으면 인덱스 1 감소
                i--
        }
        
       

    }



    for(let i = 0; i < winners.length; i++){
        document.write(winners[i] + "번, ")
    }

    document.write("</p>")



}


