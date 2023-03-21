const header = document.querySelector(".site-header")
const main = document.querySelector("main")
let oldScrollY = main.scrollTop;
main.addEventListener("scroll",(evt)=>{
    if(oldScrollY > main.scrollTop){
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }
    oldScrollY = main.scrollTop;
})
