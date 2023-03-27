
// Locomotive scroll 

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
});