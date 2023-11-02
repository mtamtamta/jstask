function verify() {
    let x = parseInt(X.value);
    let a = parseInt(A.value);
    let b = parseInt(B.value);
    let high, low;
    let GGWP = document.getElementById("result")


    if (x > a){
        low = a;
        high = b;
    }else{
        low = b;
        high = a;
    }
    if (x >= low && x <= high){
        result = "X принадлежит промежутку";
        GGWP.innerHTML = result;
    }else{
        result = "X не принадлежит промежутку"
        GGWP.innerHTML = result;
    }
}
let result;

const X = document.getElementById("1");
X.addEventListener('keyup', verify);
const A = document.getElementById("2");
A.addEventListener('keyup', verify);
const B = document.getElementById("3");
B.addEventListener('keyup', verify);
const but1 = document.getElementById("but1");
but1.addEventListener('click', verify);
