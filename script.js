
const scroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth:true,
    tablet:{ smooth:true },
    smartphone:{ smooth:true },
})

scroll.on("scroll",()=>{
    if (document.querySelector("#color.is-inview")){
        document.body.style.background = "#000101"
        document.body.style.color = "#FAFFFD"
    }
    else{
        document.body.style.background="#FAFFFD";
        document.body.style.color = "#000101"
    }
})

//  Navigation //

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))





