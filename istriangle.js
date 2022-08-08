const inputs=document.querySelectorAll(".angle-input");
const istrianglebtn=document.querySelector("#is-triangle-btn");
const outputel=document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
    const sum=Number(angle1)+Number(angle2)+Number(angle3);
    return sum;
}
function isTriangle(){
    const sumofangles=calculateSumOfAngles(inputs[0].value,inputs[1].value,inputs[2].value);
    if(sumofangles==180){
        outputel.innerText="This is a triangle!";
    }
    else{
        outputel.innerText="This is not a triangle!";
    }
}
istrianglebtn.addEventListener("click",isTriangle);
