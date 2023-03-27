const header = document.querySelector(".site-header");
const cards = document.querySelectorAll(".projectCard");
let oldScrollY = document.body.scrollTop;

cards.forEach(card=>{
    let check = false;
    card.querySelector("button")?.addEventListener("click",()=>{
        if (check === false){
            card.querySelector(".cardBody").style.translate = "100% 0";
        } else {
            card.querySelector(".cardBody").style.translate = "";
        }
        check = !check
    })
})
document.addEventListener("scroll",()=>{
    if (oldScrollY<=0){
        header.classList.remove('hide');
    }
    else if(oldScrollY > window.scrollY){
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }
    oldScrollY = window.scrollY;
})
