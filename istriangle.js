const inputs=document.querySelectorAll(".angle-input");
const istrianglebtn=document.querySelector("#is-triangle-btn");
const outputel=document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
    const sum=Number(angle1)+Number(angle2)+Number(angle3);
    return sum;
}
function isTriangle(){
    if(inputs[0].value=="" || inputs[1].value=="" || inputs[2].value==""){
        outputel.style.color="red";
        outputel.innerText="Please fill the empty fields";
    }
    else if(inputs[0].value<=0 || inputs[1].value<=0|| inputs[2].value<=0){
        outputel.style.color="red";
        outputel.innerText="Values entered must be greater than 0.";
    }
    else{
        const sumofangles=calculateSumOfAngles(inputs[0].value,inputs[1].value,inputs[2].value);
    if(sumofangles==180){
        outputel.style.color="#818cf8";
        outputel.innerText="This is a triangle!";
    }
    else{
        outputel.style.color="red";
        outputel.innerText="This is not a triangle!";
    }
    }
    
}
istrianglebtn.addEventListener("click",isTriangle);
