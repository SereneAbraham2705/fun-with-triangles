const sides=document.querySelectorAll(".side-input");
const hypobtn=document.querySelector("#hypo-btn");
const outputan=document.querySelector("#output");

function calculatesum(a,b){
    const sum= (a*a)+(b*b);
    return sum;
}
function calculateHypotenuse(){
    const sumofsides=calculatesum(Number(sides[0].value),Number(sides[1].value));
    const lengthofhypo=Math.sqrt(sumofsides);
    output.innerText="The hypotenuese of the triangle is: "+lengthofhypo;

}
hypobtn.addEventListener("click",calculateHypotenuse);