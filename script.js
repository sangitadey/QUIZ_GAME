const quizdb =[
    {
        question:"Q1: WHAT IS THE FULL NAME OF HTML?",
        a:"HELLO TIME TO MY LAND",
        b:"HEY TEXT MAKEUP LANGUAGE",
        c:"HYPER TEXT MARKUP LANGUAGE",
        d:"HYPERTEXT MARKUP LANGUAGE",
        ans:"ans4"
    },
    {
        question:"Q2:WHAT IS THE FULL FORM OF CSS",
        a:"CASCADING STYLE SHEETS",
        b:"CASCADING STYLE SHEEP",
        c:"CARTTON STYLE SHIT",
        d:"CASCADING SUPER SHEET",
        ans:"ans1"
    },
    {
        question:"Q3:WHAT IS THE FULL FORM OF HTTP?",
        a:"HYPER TEXT TRANSFER PROTOCOL",
        b:"HIGH TEXT TEST PROTOCOL",
        c:"HEY TRANSFER PROTOCOL",
        d:"HYPERTEXT TRANSFER PROTOCOL",
        ans:"ans4"
    },
    {
        question:"Q4:WHAT ISTHE FULL FORM OF W.W.W?",
        a:"wow wow wow",
        b:"world wide web",
        c:"web wide web",
        d:"wide web web",
        ans:"ans2"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers= document.querySelectorAll('.answer');
const showscore= document.querySelector('#showscore');
let questioncount=0;
let score=0;

const loadquestion=()=>{
    const questionlist =quizdb[questioncount];
    question.innerText=questionlist.question;
    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;
}

loadquestion();
const getcheckanswer=() => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }

    });
    return answer;
};
  const deselectAll= ()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
  } 


   
   submit.addEventListener('click',() => {
       const checkedAnswer =getcheckanswer();
       console.log(checkedAnswer);
      if(checkedAnswer==quizdb[questioncount].ans)
       {
            score++;
        };
       questioncount++;
       deselectAll();
       if(questioncount<quizdb.length)
        {
        loadquestion();
        }
        else{
            showscore.innerHTML=`
            <h3>you scored ${score}/${quizdb.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `;
        showscore.classList.remove('scorearea');

        }
    
 

   });