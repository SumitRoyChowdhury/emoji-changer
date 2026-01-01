let btn = document.getElementsByClassName("btn")[0];
let mouth = document.getElementsByClassName("mouth")[0];
let inputform = document.getElementsByClassName("inputform")[0];
let righteye = document.getElementsByClassName("righteye")[0];
let mood = "happy";

inputform.addEventListener("submit", e =>{
    e.preventDefault();
    changeMood();
});


function changeMood(){
    if (mood == "happy"){
        mood = "sad";
        btn.innerText = "HAPPY";
        mouth.style.borderRadius = "3vw 3vw 0 0";
        mouth.style.borderTop = "0.6vw solid black";
        mouth.style.borderBottom = "none";
    }
    else if(mood == "sad"){
        mood = "happy";
        btn.innerText = "SAD";
        mouth.style.borderRadius = "0 0 3vw 3vw"
        mouth.style.borderTop = "none";
        mouth.style.borderBottom = "0.6vw solid black";
    }
}
