const header = document.querySelector(".site-header");
let oldScrollY = document.body.scrollTop;


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
