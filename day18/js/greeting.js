// 인삿말 바꾸기 - 2초 간격으로 설정
let message = ["생일 축하해!", "고맙습니다.", "오늘도 좋은 하루!!", "안녕하세요.", "좋은 아침"];
let msgIdx = 0;    // message 인덱스

myGreeting();   // 함수 호출

function myGreeting(){
    let greeting = document.getElementById("demo");
    greeting.innerHTML = message[msgIdx];

    msgIdx++;

    if(msgIdx == message.length ){    // 3번부터가 undefined니까 3번이 되면 처음으로 돌아가도록!
        msgIdx = 0;
    }

    setTimeout(myGreeting, 2000)  // 콜백 함수
}