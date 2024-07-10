const clickButton = document.getElementById("click-button");
const text = document.getElementById("text");



function buttonPress(){
    const ran = Math.random();
    if(ran  <= .1){
        text.innerHTML = "you pressed the button";
    }
    else if(ran  <= .2){
        text.innerHTML = "hi";
    }
    else if(ran  <= .3){
        text.innerHTML = "why did you press the button";
    }
    else if(ran  <= .4){
        text.innerHTML = "WHAT IS WRONG WITH YOU";
    }
    else if(ran  <= .5){
        text.innerHTML = "help im trapped in a website";
    }
    else if(ran  <= .6){
        text.innerHTML = "hdu7e6^*SDrni";
    }
    else if(ran  <= .7){
        text.innerHTML = "help";
    }
    else if(ran  <= .8){
        text.innerHTML = "reload the page";
    }
    else if(ran  <= .9){
        text.innerHTML = "smash down your pc";
    }
    else if(ran  <= 1){
        text.innerHTML = "congratulations you got the lucky press";
    }
    
}