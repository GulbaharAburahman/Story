let correctAnswers=[];
let answers =[];


for(let i=0 ; i<9 ; i++){
  let  problemHeading=document.querySelectorAll("h2")[i];
   let problemParagraph=document.querySelectorAll("p")[i];
   let solutionList=document.querySelectorAll("li")[i];
    let num1= Math.floor(Math.random()*100 +1);
    let num2= Math.floor(Math.random()*100+1);
    let problemType= Math.floor(Math.random()*2);
   
    problemHeading.innerText=`Problem ${i+1}`;
    

    if(problemType===0){
        problemParagraph.innerText=` ${num1} + ${num2} =`
         correctAnswers.push(num1+num2);
    }else{
        if(num1>num2 || num1===num2){
        problemParagraph.innerText=`${num1} - ${num2} =`
        correctAnswers.push(num1-num2);
        }else{
         problemParagraph.innerText=`${num2} - ${num1} =`;
        correctAnswers.push(num2-num1);
        }
    }

}

function displayResults(){
    for(let i=0 ; i<9 ; i++){
        let space="_ ";
     let list= document.querySelectorAll("li")[i];
     list.innerText=`${space} ${correctAnswers[i]}`;
    }
}