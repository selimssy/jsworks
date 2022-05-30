let classification = prompt("아동, 청소년, 성인 중 선택")

        switch(classification){
            case "아동" :
                classification += " : 입장료 무료"
                break
            
            case "청소년" :
                classification += " : 입장료 2,000원"
                break

            case "성인" :
                classification += " : 입장료 5,000원"
                break
            
            default:
                classification = "입력 값을 확인하세요."
        }

        document.write(classification)