const questions = document.querySelectorAll('.question');

for(let i=0; i<questions.length;i++){
    questions[i].addEventListener("click",(e)=>{
        e.currentTarget.classList.toggle('open');
    })
}
