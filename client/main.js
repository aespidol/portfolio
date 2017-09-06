window.onbeforeunload = function(){
    window.scrollTo(0,0);
}

new WOW().init();

let fill = false;
const section = ["intro", "about"]
let about;
let oldHTML;
document.addEventListener('wheel', function(el){
    let highlight = document.getElementById("highlight");
    let scroller = document.getElementById("scroller");
    if(!about){
        about = document.getElementById("about");
    }
    console.log(scroller.className)
    if(el.deltaY > 0){
        highlight.style = "width: 108%;"
        scroller.className+=" hide";
    } else if(el.deltaY < 0){
        highlight.style = "width: 0%;"
        scroller.className = scroller.className.replace(" hide", "");
    }
})

// if mobile add on click instead of hover on work cards

