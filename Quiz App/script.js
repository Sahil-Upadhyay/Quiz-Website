
const quizDB = [
    {
        question: "Q1: What is the capital city of France?",
        a: "Paris", 
        b: "Berlin", 
        c: "Madrid", 
        d: "Rome",
        ans: "ans1",
    },
    {
        question: "Q2: What is the largest planet in our solar system?",
        a: "Mars", 
        b: "Jupiter",
        c: "Saturn",
        d: "Earth",
        ans: "ans2",
    },
    {
        question: "Q3: What is the chemical symbol for gold?",
        a: "Ag",
        b: "Au",
        c: "Hg",
        d: "Cu",
        ans: "ans2",
    },
    {
        question: "Q4: Who painted the Mona Lisa?",
        a: "Leonardo da Vinci",
        b: "Pablo Picasso",
        c: "Vincent van Gogh",
        d: "Michelangelo",
        ans: "ans1",
    },
    {
        question: "Q5: Which country is known for the Great Wall of China?",
        a: "China",
        b: "India",
        c: "Japan",
        d: "Egypt",
        ans: "ans1",
    },
    {
        question: "Q6: What is the largest ocean in the world?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        ans: "ans4",
    },
    {
        question: "Q7: What is the capital city of Australia?",
        a: "Sydney",
        b: "Canberra",
        c: "Melbourne",
        d: "Brisbane",
        ans: "ans4",
    },
    {
        question: "Q8: Who wrote the play 'Romeo and Juliet'?",
        a: "William Shakespeare",
        b: "George Bernard Shaw",
        c: "Oscar Wilde",
        d: "Jane Austen",
        ans: "ans1",
    },
    {
        question: "Q9: What is the largest mammal on Earth?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        ans: "ans2",
    },
    {
        question: "Q10: Which element has the chemical symbol 'Fe'?",
        a: "Iron",
        b: "Gold",
        c: "Silver",
        d: "Copper",
        ans: "ans1"

    },
    
];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit =document.querySelector('#submit');

const answers=document.querySelectorAll('.answer')
const showScore=document.querySelector('#showScore');

let questionCount=0
let score=0;
const loadQuestion=()=> {
    const quesList=quizDB[questionCount];
    question.innerText=quesList.question
    option1.innerText=quesList.a
    option2.innerText=quesList.b
    option3.innerText=quesList.c
    option4.innerText=quesList.d
}

loadQuestion();

const getCheckAnswer=()=> {
    let answer;
    answers.forEach((currAnsElem)=>{
        if(currAnsElem.checked){
            answer=currAnsElem.id
        }
    })
    return answer
}
const deselectAll=()=> {
    answers.forEach((currAnsElem)=>(currAnsElem.checked=false));  
}

submit.addEventListener("click", ()=> {
    const checkedAns=getCheckAnswer()
    console.log(checkedAns);

    if(checkedAns===quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();

    }else{
        showScore.innerHTML=`<h3> You Scored: ${score}/${quizDB.length} 🙌</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;

        showScore.classList.remove("scoreArea");
    }
})