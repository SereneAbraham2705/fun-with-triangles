const lengths=document.querySelectorAll(".side-enter");
const areabtn=document.querySelector("#area-btn");
const outputp=document.querySelector("#output");

function mulsides(b,h){
    const mul=b*h;
    return mul;
}
function calculatearea(){
    const muls=mulsides(Number(lengths[0].value),Number(lengths[1].value));
    const ans=1/2*muls;
    outputp.innerText="The area of the triangle is: "+ans;

}
areabtn.addEventListener("click",calculatearea);

