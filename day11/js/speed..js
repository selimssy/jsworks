// 구속을 변환하는 프로그램

const RATE_KPH_MPH = 1.609;    // 변환율
let mph = 0.0, kph = 0.0


kph = Number(prompt("당신의 구속을 입력하세요(km/h) :" , "km/h"))
// prompt 함수는 문자이므로 Number() 함수로 변환

mph = kph / RATE_KPH_MPH

document.write(kph + "km는 " + mph.toFixed(2) + "mile입니다.");    // mph.toFixed(2): 소수 둘째자리까지 설정