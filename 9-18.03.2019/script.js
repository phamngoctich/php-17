var i = document.getElementById("bong-den");
console.log(i);
console.log(i.src);
console.log(i.src.includes("bulbon"));
function BAT(){
    i.src = "./pic_bulbon.gif";
}

function TAT(){
    i.src = "./pic_bulboff.gif";
}


function BATTAT(){
    if (i.src.includes("bulbon")){TAT()}
    else{BAT()}
}