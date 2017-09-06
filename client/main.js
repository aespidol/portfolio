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
    if(!about){
        about = document.getElementById("about");
        // oldHTML = about.innerHTML;
    }
    let int;
    if(el.deltaY > 0){
        highlight.style = "width: 108%;"
        // TO DO: make interval for scrolling down
    } else if(el.deltaY < 0){
        // TO DO: make interval for scrolling up
        highlight.style = "width: 0%;"
    }
})


