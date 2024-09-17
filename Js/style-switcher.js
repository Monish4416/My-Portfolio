// ===== toggle style switcher =====

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll 
window.addEventListener("scroll",()=>{
    if(document.querySelector(".colors").classList.contains("open")){
        document.querySelector(".colors").classList.remove("open");   
    }
})

// ================ Theme colors ============
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){

    alternateStyle.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}

// ================= theme light ============
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector(".night").classList.toggle("fa-sun")
    dayNight.querySelector(".night").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
});

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})
