// 선택한 옵션 항목 찾아내기
//select 태그 이름(name)에 폼이름으로 접근



    let selectMenu = document.testForm.major
    console.log(selectMenu)

    function displaySelect(){

        // select option 속성의 value
        // let selectText =  document.getElementById("major").value;
        // alert(selectText + "가 선택되었습니다.")

        let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
        // let selectText = selectMenu.options[selectMenu.selectedIndex].value;
        alert(selectText + "가 선택되었습니다.")
    }




    // 방법들 다 비교해보자!!!

