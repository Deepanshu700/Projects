const btn = document.getElementById('click')
const btn2 = document.getElementById('modal_btn')
let display = document.getElementById('display')
let h1 = document.getElementById('color')

btn.addEventListener('click',function(){
    // display.style.transition = "0.5s";
    display.style.visibility = "visible" ;
    display.style.backgroundColor = "white";
    display.style.width = "600px";
    h1.style.visibility = "visible";
    btn2.style.visibility = "visible";
   


})
btn2.addEventListener('click',function(){   
    display.style.backgroundColor = "grey";
    
    h1.style.visibility = "hidden";
    display.style.visibility = "hidden";
    btn2.style.visibility = "hidden";
})