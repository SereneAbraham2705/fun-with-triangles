const quizform=document.querySelector(".quiz-form");
const submitbtn=document.querySelector("#submit-answer-btn");
const outputfi=document.querySelector("#output");

const correctanswers=["90°","right angled"];
function calculateScore(){
    let score=0;
    let index=0;
    const formresults=new FormData(quizform);
    for(let value of formresults.values()){
        if(value === correctanswers[index]){
            score=score+1;
        }
        index=index+1;
    }
    output.innerText="Your score is : "+score;
}
submitbtn.addEventListener("click",calculateScore)
