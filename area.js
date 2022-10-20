const lengths=document.querySelectorAll(".side-enter");
const areabtn=document.querySelector("#area-btn");
const outputp=document.querySelector("#output");

function mulsides(b,h){
    const mul=b*h;
    return mul;
}
function calculatearea(){
    if(lengths[0].value=="" || lengths[1].value==""){
        outputp.style.color="red";
        outputp.innerText="Please fill the empty fields";
    }
    else if(lengths[0].value<=0 || lengths[1].value<=0){
        outputp.style.color="red";
        outputp.innerText="Values entered must be greater than 0.";
    }
    else{
        const muls=mulsides(Number(lengths[0].value),Number(lengths[1].value));
        const ans=1/2*muls;
        outputp.style.color="#818cf8";
        outputp.innerText="The area of the triangle is: "+ans;
    }
    
}
areabtn.addEventListener("click",calculatearea);

