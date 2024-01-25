const questions=[
         {
               question:"which is the largest animal in the world",
               answers:[
                    { text:"elephant",correct:false},
                    { text:"blue whale",correct:true},
                    { text:"girafe",correct:false},
                    { text:"shark",correct:false},
                    
               ]

         },
         {
                    question: "which is the largest desert in the world",
                    answers:[
                         {text:"sahara",correct:false},
                         {text:"kalahari",correct:false},
                         {text:"Gobi",correct:false},
                         {text:"Antarctia",correct:true},
                         
                    ]
                         
         },{
                    
                    question:"which is the smallest country in the world",
                    answers:[
                         { text:"vatican city" , correct:true},
                         { text:"bhutan"  , correct:false},
                         { text:"Nepal" , correct:false},
                         { text:"Sri lanka" , correct:false},
                         
                    ]          
         }           
];
 
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0;
 
function startQuiz(){
       currentQuestionIndex=0;
       score=0;
       nextButton.innerHTML="Next";
       showQuestion();

}
function showQuestion(){
       resetstate();        
       let currentQuestion=questions[currentQuestionIndex];
       let questionNo=currentQuestionIndex + 1;
       questionElement.innerHTML=questionNo +"."+currentQuestion.
       question;
       
       currentQuestion.answers.forEach(answer => {
             const button=document.createElement("button");
             button.innerHTML=answer.text;
             button.classList.add("btn");
             answerButtons.appendChild(button);
             if(answer.correct){
                    button.dataset.correct=answer.correct; 
             }
             button.addEventListener("click",selectAnswer)       
       });
}
function resetstate(){
   nextButton.style.display="none";
   while(answerButtons.firstChild){
          answerButtons.removeChild(answerButtons.firstChild)          
   };
}
function selectAnswer(e){
       const selectedBtn=e.target;
       const isCorrect=selectedBtn.dataset.correct === "true";
       if(isCorrect){
                   selectedBtn.classList.add("correct");
                   score++; 
       }else{
                   selectedBtn.classList.add("incorrect");
       }
       Array.from(answerButtons.children).forEach(button=>{
              if(button.dataset.correct === "true"){
                    button.classList.add("correct")
              }
              button.disabled=true;      
       })
       nextButton.style.display="block";             
}
function showscore(){
       resetstate();
       questionElement.innerHTML =`You scored out of ${score} pout of ${questions.length}!`
       nextButton.innerHTML ="Play Again";
       nextButton.style.display="block"; 
}
function handleNextButton(){
       currentQuestionIndex++;
       if(currentQuestionIndex < questions.length){
              showQuestion();
       }else{
              showscore();
       }
} 

nextButton.addEventListener("click",()=>{
       if(currentQuestionIndex < questions.length){
              handleNextButton();
       }else{
              startQuiz();
       }
});
startQuiz(); 