let checkbox = document.querySelector("#shippingInfo");

// checkbox.onclick = IfCheck(){} 이렇게해도 된다
checkbox.addEventListener("click", doCheck)

// let billingName = document.querySelector("#billingName");
// let billingTel = document.querySelector("#billingTel");
// let billingAddr = document.querySelector("#billingAddr");

// let shippingName = document.querySelector("#shippingName")
// let shippingTel = document.querySelector("#shippingTel")
// let shippingAddr = document.querySelector("#shippingAddr")



function doCheck(){

    // id가 아니라 name속성으로 처리해서 위에 저렇게 id 안가져와도 된다!
    // id로 하는 것 같은데..........

    // 체크하면 주문 정보와 동일하게 배송정보로 들어가도록
    if(checkbox.checked == true){
        shippingName.value = billingName.value;
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }
    else{     // heckbox.checked == false  (체크 해제하면 다시 빈칸)
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
}

