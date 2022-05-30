window.onload = function(){
document.getElementById("aaa").style.background = "yellow";


let num1 = 10;
let num2 = 10.2;
let num3 = 1e2 + 2;    // 100
console.log(num3);



//string
let str1 = "문자";
let str2 = "문자는 '문자'";
let str3 = '문자는 "문자"';
let str4 = "you\'re too smart";
console.log(str1 + "," + str2 + "," + str3 + "," + str4);


//boolean
let com1 = (5 > 4);
let com2 = (5 < 4);
console.log(com1 + "," + com2);



// undefined
let storage;
console.log(storage);



//null
let gnb = document.getElementById("gnb");
console.log(gnb);    // null(gnd 없을때)


gnb.style.color = "red";
console.log(gnb);    // <ul id="gnb" style="color: red;">...</ul>  (gnd 지정했을 때)




//type of
let type1 = 10;
let type2 = "문자";
let type3 = true;
console.log(typeof(type1) + ", " + typeof(type2) + ", " + typeof(type3));
// number, string, boolean



}