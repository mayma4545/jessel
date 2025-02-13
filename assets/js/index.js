const section2 = document.querySelector("#section2");
let audio = new Audio('./assets/audio/ty.mp3');


window.addEventListener("scroll", function(){
    var sections = document.querySelectorAll(".section");
    let y = window.scrollY;
    console.log(y)
    if(y ==  200){
         
    }
    if(y >  1900 && y < 2000){
        document.getElementById("section6-1").classList.add("section-6-left")
        document.getElementById("section6-2").classList.add("section-6-right")
        document.getElementById("section6-3").classList.add("section-6-left")
    }
    if(y > 3500 && y< 3700){
        document.getElementById("section7-1").classList.add("section7-1-scale")
    }
    if(y > 4200 && y< 4400){
        document.getElementById("section8-1").classList.add("section8-opacity")
    }
    

});

//start
document.getElementById("start").addEventListener("click", function(){
    audio.play();
    const firt = document.querySelector(".first")
    const con = document.querySelector(".container")
    document.querySelector(".valentines-day-card").style.display = "none"
    con.style.display = "block";
    firt.classList.add("ani")
})






