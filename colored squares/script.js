const o=document.getElementById("sq1");
const blu=document.getElementById("sq2");
const b=document.getElementById("sq3");
o.addEventListener("mouseenter",orange);
function orange(){
    console.log("Entered orange region");
}
blu.addEventListener("mouseenter",blue);
function blue(){
    console.log("Entered blue region");
}

b.addEventListener("mouseenter",black);
function black(){
    console.log("Entered black region");
}