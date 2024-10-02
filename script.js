const quesationElement=document.querySelector('.quesation')
const answerButton=document.querySelector('.answer-button')
const nextButton=document.querySelector('.next-btn')

const quesation=[
    {
        quesation:"Whish is the largest animal in the world?",
        answers:[
           { text:"snake",correct:false},
           { text:"Elephent",correct:false},
           { text:"Blue whale",correct:true},
           { text:"Giraffe",correct:false},
        ]
    },
    {
        quesation:"Whish is the smallest continent in the world?",
        answers:[
           { text:"Asia",correct:false},
           { text:"Australia",correct:true},
           { text:"Arctic",correct:false},
           { text:"Africa",correct:false},
        ]
    },
       { quesation:"Find the C? a=2;b=2; c=a+b ",
        answers:[
           { text:"2",correct:false},
           { text:"4",correct:false},
           { text:"Syntax Error",correct:false},
           { text:"Complie time Erroe",correct:true},
        ]
    },
       { quesation:'Whish is the mosr popular programming language "Now"  in the world?',
        answers:[
           { text:"python",correct:false},
           { text:"Java script",correct:true},
           { text:"Php",correct:false},
           { text:"C++",correct:false},
        ]
    },
];


let currentQuesationIndex=0;
let score=0;

function startQuiz(){
    currentQuesationIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuesation();
}
function  showQuesation(){
    resetState();
    let currentQuesation=quesation[currentQuesationIndex];
    let quesationNo=currentQuesationIndex+1;
    quesationElement.innerHTML=quesationNo+". "+currentQuesation.quesation;
    currentQuesation.answers.forEach((answer)=>{
        const button=document.createElement('button')
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    });
}
function resetState(){
nextButton.style.display='none';
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==='true'
    if(isCorrect){
        selectedBtn.classList.add("correct")
        nextButton.style.display='block';
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach((button)=>{
     if(button.dataset.correct==='true'){
       button.classList.add('correct')
     }
     button.disabled=true
    })
    nextButton.style.display="block"
}
function showScore(){
    resetState();
    quesationElement.innerHTML=`You scored ${score} out of ${quesation.length}`
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
}
function  handleNextButton(){
    currentQuesationIndex++;
    if(currentQuesationIndex<quesation.length){
    showQuesation();
    }else{
        showScore();
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuesationIndex<quesation.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();

