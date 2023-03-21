const header = document.querySelector(".site-header")
let oldScrollY = document.body.scrollTop;
document.addEventListener("scroll",(evt)=>{
    if(oldScrollY > window.scrollY){
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }
    oldScrollY = window.scrollY;
})
