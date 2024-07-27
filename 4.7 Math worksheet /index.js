const answers=[];
const correctanswers=[];
for(let i=0; i<12 ; i++){ 
let num1=Math.floor(Math.random()*200+1);
let num2=Math.floor(Math.random()*200+1);
let operation = Math.random() <0.5 ? '+': '-';
let pElement= document.querySelectorAll("p")[i];

if(operation==='+'){
pElement.innerText=`   ${num1} + ${num2} = `;
correctanswers.push(num1+num2);
} else if(num1<num2){
    pElement.innerText=` ${num2} - ${num1} = `;
    correctanswers.push(num2-num1);
}else{
    pElement.innerText=` ${num1} - ${num2}= `;
    correctanswers.push(num1-num2);
}
}


let counter=0;
function checkResult(){
   
  for(let i =0; i<12; i++){
        let answer=document.querySelectorAll("input")[i].value;
        
      if(parseInt(answer)=== correctanswers[i]){
        counter++;
      }else{
        document.querySelectorAll("input")[i].style.backgroundColor="red";
      }

    }

    let text ="";
    if(counter===12){
      text="Wow ! wonderfull , you got all correct 👏";
    }else if(counter<12 && counter>8){
      text =`Good job you got ${counter} correct answers 👍`;
    }else if( counter>5 && counter<=8) {
      text =`You have ${counter} correct 👐`
    } else {
      text =`You got ${counter} correct`
    }
       
    document.querySelector("#result").textContent=text;

}