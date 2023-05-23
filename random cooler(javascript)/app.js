const btns = document.getElementById('button2');
let colors = document.getElementById('coolers');  

btns.addEventListener("click" , function(){
    const r1 = randomNumbers1();
    const r2 = randomNumbers2();
    const r3 = randomNumbers3();
    colorss = `rgb(${r1},${r2},${r3})`;
    document.body.style.backgroundColor = colorss;  
   
    colors.textContent = colorss;
    console.log(colors)

})
function randomNumbers1(){
    return Math.floor(Math.random() * 256);
}
function randomNumbers2(){
    return Math.floor(Math.random() * 256);
}
function randomNumbers3(){
    return Math.floor(Math.random() * 256);
}