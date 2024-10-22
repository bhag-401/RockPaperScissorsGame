let scoreyou=0;
let scorecom=0;
let choices=document.querySelectorAll(".a");
let btn=document.querySelector("button")
let  uscore=document.querySelector("#u")
let cscore=document.querySelector("#c")
let generateComputerChoice=()=>{
    let option=["rock","paper","scissors"];
  let ind=  Math.floor(Math.random()*3);
  return option[ind];
}
let winner=(userwin)=>{
    if(userwin)
    {
        scoreyou++;
        uscore.innerText=scoreyou;
        console.log("u win");
        btn.innerText="YOU WIN";
        btn.style.backgroundColor="green"
    }
    else{
        scorecom++;
        cscore.innerText=scorecom;
        console.log("u loose");
        btn.innerText="YOU LOOSE";
        btn.style.backgroundColor="red"
    }
}
let playgame=(userChoice)=>{
console.log("user choice=",userChoice);
//generate computer choice->modular
let comchoice=generateComputerChoice();
console.log("com Choice=",comchoice);
// btn.innerText="PICK YOUR MOVE"
if(userChoice==comchoice){
    btn.innerText="DRAW...PLAY AGAIN"
    btn.style.backgroundColor="black"
}
else{
    let userwin=true;
    if(userChoice=='rock'){
        userwin=comchoice=='paper' ? false:true;
    }
    else if(userChoice=='paper'){
        userwin=comchoice=='scissors' ?false:true;
    }
    else{
        userwin=comchoice=='rock' ?false:true;
    }
    winner(userwin);
}
}
choices.forEach((e)=>{
e.addEventListener("click",()=>{
    let pic=e.getAttribute("id")
// console.log("choice was clicked",pic);
playgame(pic);
})
})



