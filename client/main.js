window.onbeforeunload = function(){
    window.scrollTo(0,0);
}

new WOW().init();

let fill = false;
const section = ["intro", "about"]
let about;
let oldHTML;
document.addEventListener('wheel', function(el){
    let card = document.getElementById("card");
    let scroller = document.getElementById("scroller");
    let description = document.getElementById("description");
    if(!about){
        about = document.getElementById("about");
    }
    let hideIdx = scroller.className.indexOf("hide");
    if(el.deltaY > 0){
        card.children[0].className = "pull"
        setTimeout(function(){
            card.style = "width: 100%;"            
            description.style = "opacity: 1.0;"
        }, 110)

        if(hideIdx === -1){
            scroller.className+=" hide";
        }
    } else if(el.deltaY < 0){
        card.style = "width: 50%;"
        card.children[0].className = ""        
        scroller.className = scroller.className.replace(" hide", "");
        description.style = "opacity: 0;"        
    }
})

// if mobile add on click instead of hover on work cards

