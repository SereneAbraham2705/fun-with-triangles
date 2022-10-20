const sides=document.querySelectorAll(".side-input");
const hypobtn=document.querySelector("#hypo-btn");
const outputan=document.querySelector("#output");

function calculatesum(a,b){
    const sum= (a*a)+(b*b);
    return sum;
}
function calculateHypotenuse(){
    if(sides[0].value=="" || sides[1].value==""){
        output.style.color="red";
        output.innerText="Please fill the empty fields";
    }
    else if(sides[0].value<=0 || sides[1].value<=0){
        output.style.color="red";
        output.innerText="Values entered must be greater than 0.";
    }
    else{
        const sumofsides=calculatesum(Number(sides[0].value),Number(sides[1].value));
        const lengthofhypo=Math.sqrt(sumofsides);
        output.style.color="#818cf8";
        output.innerText="The hypotenuese of the triangle is: "+lengthofhypo;
    }
    

}
hypobtn.addEventListener("click",calculateHypotenuse);